import { component$, Slot, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  useStyles$("nav { background-color: red; }");
  return (
    <article class="prose prose-invert mx-5 mt-28 prose-code:break-words prose-img:rounded-xl">
      <Slot />
    </article>
  );
});
