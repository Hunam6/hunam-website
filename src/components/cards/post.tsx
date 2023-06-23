import { component$ } from "@builder.io/qwik";
import { Image, type ImageProps } from "@unpic/qwik";

export interface PostProps {
  title: string;
  slug: string;
  date: string;
  editedDate?: string;
  image: ImageProps;
}

export const Post = component$<PostProps>((props) => {
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
    <article class="border-3 border-gray rounded-3xl p-3 md:flex">
      <a href={"/posts/" + props.slug} class="md:w-1/2 md:m-5">
        <Image {...props.image} class="rounded-2xl" />
      </a>
      <div class="md:mx-5">
        <div class="text-center my-3 text-sm md:h-1/4 md:text-lg">
          <p>{date}</p>
          {props.editedDate && <p>Last edited: {editedDate}</p>}
        </div>
        <a
          href={"/posts/" + props.slug}
          class="text-lg block text-justify md:flex md:flex-col md:justify-center md:h-1/2 md:text-2xl"
        >
          {props.title}
        </a>
      </div>
    </article>
  );
});
