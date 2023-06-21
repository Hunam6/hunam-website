import { Link, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export const NavBar = component$(() => {
  const pathName = useLocation().url.pathname;

  return (
    <nav class="absolute left-0 right-0 top-1 flex items-center bg-black justify-around gap-5 text-2xl border-3 rounded-full m-5 p-1 z-10 md:w-1/3 md:mx-auto md:mt-10 md:py-4 md:text-3xl">
      <Link href="/" class={pathName === "/" ? "font-bold" : ""}>
        Home
      </Link>
      <Link href="/posts" class={pathName === "/posts" ? "font-bold" : ""}>
        Posts
      </Link>
      <Link href="/about" class={pathName === "/about" ? "font-bold" : ""}>
        About
      </Link>
    </nav>
  );
});
