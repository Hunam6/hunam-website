import { component$ } from "@builder.io/qwik";
import { gsap } from "gsap";

export const moveCursorDot = (ev: any, el: Element) => {
  gsap.to(el, {
    duration: 0,
    x: ev.clientX - 2.5,
    y: ev.clientY - 4,
  });
};

export const moveCursorCircle = (ev: any, el: Element) => {
  gsap.to(el, {
    duration: 0.8,
    x: ev.clientX - 25,
    y: ev.clientY - 25,
  });
};

export const Cursor = component$(() => {
  return (
    <>
      <div
        document:onMouseMove$={(ev, el) => moveCursorDot(ev, el)}
        id="cursor-dot"
        class="pointer-events-none fixed z-50 h-1 w-1 rounded-full bg-white mix-blend-difference"
      ></div>
      <div
        document:onMouseMove$={(ev, el) => moveCursorCircle(ev, el)}
        id="cursor-circle"
        class="pointer-events-none fixed z-50 h-12 w-12 rounded-full border-3 border-yellow bg-transparent mix-blend-difference"
      ></div>
    </>
  );
});
