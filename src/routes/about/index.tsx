import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Me from "~/media/me.jpeg?jsx";
import { Infocard, type InfocardProps } from "~/components/InfoCard/infocard";

export default component$(() => {
  function calculateAge() {
    const birthDate = new Date(2004, 9, 3);
    const today = new Date();
    const age =
      today.getFullYear() -
      birthDate.getFullYear() -
      (today < new Date(today.getFullYear(), 9, 3) ? 1 : 0);
    return age;
  }

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
      value: "website@hunam.me",
      URL: "to:website@hunam.me",
    },
    {
      name: "Twitter/X",
      value: "hunam_",
      URL: "https://x.com/hunam_",
    },
    {
      name: "Discord",
      value: "hunam_",
    },
    {
      name: "Age",
      value: calculateAge().toString(),
    },
  ];

  return (
    <>
      <section class="md:flex md:items-center mt-24 md:mt-auto">
        <Me class="md:h-screen" />
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
