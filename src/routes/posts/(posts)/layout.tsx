import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import prism from "./prism.css?inline";
import style from "./style.css?inline";

export default component$(() => {
  useStyles$(prism);
  useStyles$(style);
  useVisibleTask$(async () => {
    const mermaid = (await import("mermaid")).default;
    mermaid.initialize({ theme: "dark" });
    await mermaid.run({ querySelector: ".language-mermaid" });

    document
      .querySelectorAll("blockquote > p > strong")
      .forEach((el: Element) => {
        if (el.textContent === "Note") {
          el.classList.add("decoration-emerald-300");
        } else if (el.textContent === "Warning") {
          el.classList.add("decoration-red-300");
        }
      });
  });

  return (
    <article
      class="mt-28 mx-5 md:mx-auto md:mt-48 md:max-w-[50vw]
    prose prose-invert
    prose-blockquote:border-l-orange-300 prose-th:text-white prose-headings:text-orange-300 prose-p:text-white
    prose-code:break-words prose-img:rounded-xl prose-h1:text-white"
    >
      <Slot />
    </article>
  );
});
