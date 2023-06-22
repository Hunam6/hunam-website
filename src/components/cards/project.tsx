import { component$ } from "@builder.io/qwik";
import { LinkIcon } from "~/components/icons/link";
import { Image, type ImageProps } from "@unpic/qwik";

export interface ProjectProps {
  name: string;
  role: string;
  description: string;
  link: string;
  img?: ImageProps;
}

export const Project = component$<ProjectProps>((props) => {
  return (
    <article class="border-4 border-gray rounded-3xl mx-5 p-3 md:w-[45vw] md:mx-auto">
      <div class="flex justify-between items-center mb-2 md:text-3xl">
        <h3 class="font-bold whitespace-nowrap">{props.name}</h3>
        <span class="bg-white h-0.5 w-full mx-2 md:h-1 md:mx-5"></span>
        <p class="whitespace-nowrap">{props.role}</p>
      </div>
      <p class="mb-2 md:text-2xl md:mb-5">{props.description}</p>
      {props.img ? (
        <Image {...props.img} class="rounded-lg mt-4 md:rounded-2xl" />
      ) : null}
      <a
        href={props.link}
        class="flex items-center gap-1 border-2 rounded-full px-2 w-fit justify-end mr-0 ml-auto md:text-2xl md:mb-1"
      >
        <LinkIcon />
        Read more
      </a>
    </article>
  );
});
