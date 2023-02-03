import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { gsap } from "gsap";

export const linkOnMouseEnter = () => {
  gsap.to("#cursor-dot", {
    duration: 0.4,
    scale: 0,
    ease: "Power2.easeOut",
  });
  document.getElementById("cursor-circle")!.classList.add("bg-yellow");
};

export const linkOnMouseLeave = () => {
  gsap.to("#cursor-dot", {
    duration: 0.4,
    scale: 1,
    ease: "Power2.easeOut",
  });
  document.getElementById("cursor-circle")!.classList.remove("bg-yellow");
};

export const SlickLink = component$(
  (props: { href: string; class?: string }) => {
    return (
      <Link
        href={props.href}
        class={props.class + " cursor-none"}
        onMouseEnter$={() => linkOnMouseEnter()}
        onMouseLeave$={() => linkOnMouseLeave()}
      >
        <Slot />
      </Link>
    );
  }
);
