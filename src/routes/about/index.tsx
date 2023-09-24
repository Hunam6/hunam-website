import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Me from "~/media/me.png?jsx";
import { Infocard, type InfocardProps } from "~/components/InfoCard/infocard";

export default component$(() => {
  const infos: InfocardProps[] = [
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
      <section class="md:flex md:items-center mt-24 md:mt-auto">
        <Me class="md:h-screen" />
        {/* <Image
          src="https://a.storyblok.com/f/237087/4000x4900/f6eeecc0d2/me.png"
          width="4000"
          height="4900"
          class="md:!w-auto md:!h-[100vh]"
        /> */}
        <div class="flex flex-col gap-5 mx-5 mt-5 md:w-full md:mx-28 md:gap-7">
          {infos.map((info, idx) => (
            <Infocard {...info} key={idx} />
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
