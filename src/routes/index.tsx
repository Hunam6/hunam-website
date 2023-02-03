import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SlickLink } from "~/components/slick-link";
import style from "./index.css?inline";

export const Social = component$(
  (props: { name: string; link: string; icon: string }) => {
    return (
      <SlickLink
        href={props.link}
        class="flex items-center justify-end gap-4 hover:text-white"
      >
        <p>{props.name}</p>
        <img src={props.icon} alt={props.name} class="h-8 w-8" />
      </SlickLink>
    );
  }
);

export default component$(() => {
  useStylesScoped$(style);

  return (
    <>
      <main
        class="
          relative mx-auto mt-[20vh]
          flex h-[60vh] w-10/12
          flex-col bg-[url('/assets/stroke-mobile.svg')] bg-no-repeat pl-8 pt-36 font-['Inconsolata_UltraExpanded_Black'] md:w-7/12 md:bg-[url('/assets/stroke-desktop.svg')] md:pl-20
          md:pt-32"
      >
        <img
          src="/assets/me.jpg"
          alt="A photo of myself with a cool bucket hat."
          class="
            absolute top-0 -right-5 h-32
            w-32 -translate-y-1/2 rounded-full border-4
            border-yellow md:h-56 md:w-56 md:border-[10px]"
        />
        <h3 class="custom-text-shadow-1 text-xl text-white md:text-4xl">
          Hi, I'm Hunam.
        </h3>
        <h3 class="custom-text-shadow-2 mt-10 w-76 text-xl text-dark md:w-auto md:text-4xl">
          I craft quality products.
        </h3>
      </main>
      <footer
        class="
        absolute right-4 bottom-4
        flex flex-col gap-6 text-lg
        text-light-grey md:flex-row md:text-xl"
      >
        <Social
          name="Github"
          link="https://github.com/hunam6"
          icon="/assets/icons/github.svg"
        />
        <Social
          name="Twitter"
          link="https://twitter.com/hunam_"
          icon="/assets/icons/twitter.svg"
        />
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Home",
  meta: [
    {
      name: "description",
      content: "Hunam's personal website & portfolio homepage.",
    },
  ],
};
