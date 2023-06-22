import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // const posts: string[] = [];
  return (
    <>
      <section class="md:flex md:items-center">
        {/* {posts.map((info, idx) => (
          <Info {...info} key={idx} />
        ))} */}
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Posts",
  meta: [
    {
      name: "description",
      content: "I sometimes write articles about anything IT related.",
    },
  ],
};
