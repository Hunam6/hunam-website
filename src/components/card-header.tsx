import { component$ } from "@builder.io/qwik";
import { SlickLink } from "~/components/slick-link";

export const CardHeader = component$(
  (props: { name: string; class?: string; href?: string }) => {
    return (
      <>
        {props.href ? (
          <SlickLink href={props.href} class="no-underline">
            <h3
              class={
                "inline py-1 text-center text-xl text-light-grey " + props.class
              }
            >
              {props.name}
            </h3>
          </SlickLink>
        ) : (
          <h3 class={"text-center text-xl text-light-grey " + props.class}>
            {props.name}
          </h3>
        )}

        <div
          class="
            my-2 h-0.5 bg-gradient-to-r from-transparent
            via-stone-700 to-transparent
        "
        ></div>
      </>
    );
  }
);
