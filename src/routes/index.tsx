import { component$, $ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import {
  Projectcard,
  type ProjectcardProps,
} from "~/components/ProjectCard/projectcard";
import Flower from "~/media/flower.jpg?jsx";
import Fdf from "~/media/fdf.png?jsx";
import { Scrolldownicon } from "~/components/ScrollDownIcon/scrolldownicon";

export default component$(() => {
  const projects: ProjectcardProps[] = [
    {
      name: "Go2V",
      role: "Project lead",
      description:
        "A complex tool to translate code in Go to V. It's an official project from the V-lang organization.",
      link: "https://github.com/vlang/go2v",
    },
    {
      name: "FdF",
      role: "Solo project",
      description:
        "A 3D wire-frame renderer written in C using a very low-level graphics library.",
      link: "https://github.com/hunam6/fdf",
      img: $(Fdf),
      imgAlt: "A screenshot of the FdF project in action",
    },
    {
      name: "Goodgle",
      role: "Solo project",
      description:
        "A “meta-search engine” based on Google results providing huge privacy and a beautiful UI/UX.",
      link: "https://github.com/hunam6/goodgle",
    },
    {
      name: "V-lang",
      role: "Contributor",
      description:
        "A simple, fast, safe, compiled language for developing maintainable software.",
      link: "https://github.com/vlang/v",
    },
  ];

  return (
    <>
      <section>
        <div class="relative md:static">
          <Flower
            alt="A gorgeous flower"
            class="md:absolute md:top-0 md:right-0 md:h-screen md:w-auto"
            loading="eager"
          />
          <h1 class="text-5xl absolute -bottom-5 ml-10 md:static md:mt-96 md:text-7xl md:ml-80">
            <span class="text-orange-300">Passionate</span> <br />
            developer.
          </h1>
        </div>
        <h2 class="mx-10 mt-16 text-lg md:ml-80 md:mr-[50%] md:text-2xl">
          Hi! I'm Elie Tattevin-Drevet (aka{" "}
          <Link href="https://github.com/hunam6">Hunam</Link>
          ). I'm a software engineer born in France and living in Finland.
        </h2>
        <Link href="#next" scroll={false}>
          <Scrolldownicon class="mx-auto w-auto h-16 my-10 md:absolute md:left-0 md:right-0 md:bottom-5" />
        </Link>
      </section>
      <section class="mb-10 md:mt-[45vh]" id="next">
        <p class="mt-5 text-2xl font-normal mx-5 md:text-4xl md:ml-52 md:mr-[60vw]">
          Here some of my most significant projects...
        </p>
        <div class="flex flex-col gap-8 mt-6 md:mt-36 md:gap-16">
          {projects.map((project, index) => (
            <Projectcard {...project} key={index} />
          ))}
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Home",
  meta: [
    {
      name: "description",
      content:
        "Hi! I'm Elie Tattevin-Drevet (aka Hunam). I'm a software engineer born in France and living in Finland.",
    },
  ],
};
