import { component$ } from "@builder.io/qwik";

export interface PostcardProps {
  title: string;
  slug: string;
  date: string;
  editedDate?: string;
  image: any;
}

export const Postcard = component$<PostcardProps>((props) => {
  const date = new Date(props.date).toLocaleString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const editedDate =
    props.editedDate &&
    new Date(props.editedDate).toLocaleString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  return (
    <article class="border-2 border-orange-300 rounded-3xl p-3 md:flex">
      <a href={"/posts/" + props.slug} class="md:w-1/2 md:m-5">
        <props.image class="rounded-2xl" />
      </a>
      <div class="md:mx-5">
        <p class="text-center my-3 text-sm md:h-1/4 md:text-lg">
          {date} {props.editedDate ? ` — version of ${editedDate}` : null}
        </p>
        <a
          href={"/posts/" + props.slug}
          class="text-lg block text-center md:flex md:flex-col md:justify-center md:h-1/2 md:text-2xl"
        >
          {props.title}
        </a>
      </div>
    </article>
  );
});
