import { component$ } from "@builder.io/qwik";

export interface InfoProps {
  name: string;
  value: string;
  URL?: string;
}

export const Info = component$<InfoProps>((props) => {
  return (
    <article class="flex justify-between text-lg md:text-2xl">
      <p>{props.name}</p>
      {props.URL ? (
        <a href={props.URL} class="font-mono text-sm md:text-lg">
          {props.value}
        </a>
      ) : (
        <p class="font-mono text-sm md:text-lg">{props.value}</p>
      )}
    </article>
  );
});
