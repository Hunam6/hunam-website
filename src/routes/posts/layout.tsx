import {
  component$,
  Slot,
  useClientEffect$,
  useStyles$,
} from "@builder.io/qwik";
import mermaid from "mermaid";
import { linkOnMouseEnter, linkOnMouseLeave } from "~/components/slick-link";
import style from "./layout.css?inline";
import prism from "./prism.css?inline";

export default component$(() => {
  useStyles$(style);
  useStyles$(prism);

  useClientEffect$(() => {
    const article = document.getElementsByTagName("article")[0];
    const links = article.getElementsByTagName("a");
    const details = article.getElementsByTagName("details");

    for (const link of links) {
      link.addEventListener("mouseenter", () => linkOnMouseEnter());
      link.addEventListener("mouseleave", () => linkOnMouseLeave());
    }
    for (const detail of details) {
      detail.addEventListener("mouseenter", () => linkOnMouseEnter());
      detail.addEventListener("mouseleave", () => linkOnMouseLeave());
    }

    mermaid.initialize({ theme: "dark" });
    document.querySelectorAll(".language-mermaid").forEach((el, i) => {
      mermaid.render("mermaid-" + i.toString(), el.textContent!, (svg) => {
        el.parentElement!.outerHTML = svg;
      });
    });
  });

  return (
    <main class="flex justify-center">
      <article
        class="
      prose prose-invert my-10 w-10/12 max-w-none
      prose-a:hover:cursor-none prose-blockquote:border-l-yellow prose-img:rounded-md md:w-6/12"
      >
        <Slot />
      </article>
    </main>
  );
});
