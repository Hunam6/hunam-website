import { component$ } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";

export const Linkicon = component$<QwikIntrinsicElements["svg"]>((props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      {...props}
      class="inline"
    >
      <path
        fill="currentColor"
        d="M10 15H7c-1.7 0-3-1.3-3-3s1.3-3 3-3h3c.6 0 1-.4 1-1s-.4-1-1-1H7c-2.8 0-5 2.2-5 5s2.2 5 5 5h3c.6 0 1-.4 1-1s-.4-1-1-1zm7-8h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.8 0 5-2.2 5-5s-2.2-5-5-5zm-9 5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1z"
      ></path>
    </svg>
  );
});
