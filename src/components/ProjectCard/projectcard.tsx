import { component$ } from "@builder.io/qwik";
import { Linkicon } from "../LinkIcon/linkicon";

export interface ProjectcardProps {
  name: string;
  role: string;
  description: string;
  link: string;
  img?: any;
  imgAlt?: string;
}

export const Projectcard = component$<ProjectcardProps>((props) => {
  return (
    <article class="border-4 border-[#878787] rounded-3xl mx-5 p-3 md:w-[45vw] md:mx-auto">
      <div class="flex justify-between items-center mb-2 md:text-3xl">
        <h3 class="text-orange-300 whitespace-nowrap">{props.name}</h3>
        <span class="bg-white h-0.5 w-full mx-2 md:h-0.5 md:mx-5"></span>
        <p class="whitespace-nowrap ">{props.role}</p>
      </div>
      <p class="mb-2 md:text-2xl md:mb-5">{props.description}</p>
      {props.img && (
        <props.img
          class="rounded-lg my-4 mx-auto md:rounded-2xl"
          alt={props.imgAlt}
        />
      )}
      <a
        href={props.link}
        class="flex items-center gap-1 border-2 border-transparent text-orange-300 rounded-full px-2 w-fit justify-end mr-0 ml-auto md:text-2xl md:mb-1"
      >
        <Linkicon class="fill-orange-300 md:w-8 md:h-8" />
        Read more
      </a>
    </article>
  );
});
