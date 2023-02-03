import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CardHeader } from "~/components/card-header";
import { SlickLink } from "~/components/slick-link";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const Project = component$((props: ProjectProps) => {
  return (
    <article
      class="
      overflow-hidden
      rounded-5xl bg-dark-grey
      md:flex md:h-72 md:even:flex-row-reverse"
    >
      <div class="p-5 md:w-1/2">
        <CardHeader name={props.name} />
        <p class="text-white md:mb-2 md:mt-8">{props.description}</p>
        <SlickLink href={props.link} class="text-yellow md:block">
          Keep reading...
        </SlickLink>
      </div>
      <div class="bg-white md:w-1/2">
        <img src={props.image} alt={props.name} class="md:mx-auto md:h-72" />
      </div>
    </article>
  );
});

export default component$(() => {
  return (
    <>
      <main
        class="
          mx-auto mb-10 mt-5
          flex w-10/12 flex-col gap-10 md:w-8/12"
      >
        <Project
          name="Go2V"
          description="Go2V is a fully automated Go-lang to V-lang source code translator."
          image="/assets/projects/go2v.jpeg"
          link="https://github.com/vlang/go2v"
        />
        <Project
          name="Goodgle"
          description="The beautiful & private meta-search engine based on Google."
          image="/assets/projects/goodgle.png"
          link="https://github.com/hunam6/goodgle"
        />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Projects",
  meta: [
    {
      name: "description",
      content: "Open source projects I made.",
    },
  ],
};
