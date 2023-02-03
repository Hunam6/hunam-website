import { component$, Slot, useClientEffect$ } from "@builder.io/qwik";
import { Cursor } from "~/components/cursor";
import { SlickLink } from "~/components/slick-link";

export default component$(() => {
  useClientEffect$(() => {
    if ("ontouchstart" in window) {
      document.getElementById("cursor-dot")!.style.display = "none";
      document.getElementById("cursor-circle")!.style.display = "none";
    }
  });
  return (
    <>
      <Cursor />
      <nav
        class="
          flex h-[20vh] flex-col
          md:flex-row md:items-center md:justify-center"
      >
        <div class="mt-8 mb-8 flex items-center justify-center gap-8 md:mr-16">
          <img src="/assets/hunam.png" alt="Hunam logo" class="h-12" />
          <h2 class="text-2xl text-white md:text-3xl">Hunam</h2>
        </div>
        <div class="flex justify-center gap-5 text-lg text-yellow md:gap-10 md:text-xl">
          <SlickLink href="/">/home</SlickLink>
          <SlickLink href="/projects">/projects</SlickLink>
          <SlickLink href="/posts">/posts</SlickLink>
          <SlickLink href="/contact">/contact</SlickLink>
        </div>
      </nav>
      <Slot />
    </>
  );
});
