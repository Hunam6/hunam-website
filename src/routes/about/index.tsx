import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { Info, type InfoProps } from "~/components/cards/info";

export default component$(() => {
  const infos: InfoProps[] = [
    {
      name: "Name",
      value: "Elie Tattevin-Drevet",
    },
    {
      name: "LinkedIn",
      value: "elie-td",
      URL: "https://linkedin.com/in/elie-td/",
    },
    {
      name: "Github",
      value: "hunam6",
      URL: "https://github.com/hunam6",
    },
    {
      name: "Email",
      value: "hunam@disroot.org",
      URL: "to:hunam@disroot.org",
    },
    {
      name: "Twitter",
      value: "hunam_",
      URL: "https://twitter.com/hunam_",
    },
    {
      name: "Discord",
      value: "hunam_",
    },
    {
      name: "Age",
      value: "18",
    },
  ];

  return (
    <>
      <section class="md:flex md:items-center">
        <Image
          src="https://a.storyblok.com/f/237087/4000x4900/f6eeecc0d2/me.png"
          width="4000"
          height="4900"
          class="md:!w-auto md:!h-[100vh]"
        />
        <div class="flex flex-col gap-5 mx-5 mt-5 md:w-full md:mx-28 md:gap-7">
          {infos.map((info, idx) => (
            <Info {...info} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - About",
  meta: [
    {
      name: "description",
      content: "Here is my contact information.",
    },
  ],
};
