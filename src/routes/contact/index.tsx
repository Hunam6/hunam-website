import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CardHeader } from "../../components/card-header";
import { SlickLink } from "../../components/slick-link";

export const Social = component$(
  (props: { name: string; link: string; user: string }) => {
    return (
      <p class="mt-5">
        {props.name}:{" "}
        <SlickLink href={props.link} class="text-yellow">
          {props.user}
        </SlickLink>
      </p>
    );
  }
);

export default component$(() => {
  return (
    <>
      <main
        class="
          mt-5
          flex"
      >
        <article
          class="
            mx-auto
            w-10/12 rounded-5xl bg-dark-grey
            p-5 text-center text-white md:w-8/12 md:py-10"
        >
          <CardHeader name="Contact/Socials" />
          <div class="md:mt-8">
            <Social
              name="Github"
              link="https://github.com/hunam6"
              user="@Hunam6"
            />
            <Social
              name="Twitter"
              link="https://twitter.com/hunam_"
              user="@Hunam_"
            />
            <Social name="Discord" link="." user="@Hunam6" />
            <Social
              name="Email"
              link="mailto:hunam@disroot.org"
              user="hunam@disroot.org"
            />
          </div>
        </article>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Contact",
  meta: [
    {
      name: "description",
      content: "How to reach out to me.",
    },
  ],
};
