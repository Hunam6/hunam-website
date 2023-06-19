import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CardHeader } from "~/components/card-header";

interface PostProps {
  link: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
}

export const Post = component$((props: PostProps) => {
  const date = new Date(props.date);
  return (
    <article class="rounded-5xl bg-dark-grey p-5 text-center">
      <CardHeader name={props.title} class="text-yellow" href={props.link} />
      <p class="mt-1 mb-8 text-center text-sm text-white">
        {`${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`}
      </p>
      <p class="text-left text-white">{props.description}</p>
    </article>
  );
});

export default component$(() => {
  //TODO: remove once Qwik City have a better way to get the data (https://github.com/BuilderIO/qwik/issues/1458)
  const posts = [
    {
      title:
        "The Ultimate Guide to Setup Your Own Streaming Service with Sonarr, Radarr, Plex... using Usenet/Torrents",
      description:
        "Step-by-step guide to setting up your own movie/series streaming service using Sonarr, Radarr, and Plex with Usenet/Torrents. Suitable for beginners and power users.",
      link: "ultimate-guide-setup-streaming-service-sonarr-radarr-plex-usenet-torrents",
      date: "2022-12-19T11:38:43.584Z",
      draft: false,
    },
  ];
  return (
    <main
      class="
          mx-auto mb-10 mt-5
          flex w-10/12 flex-col gap-10 md:w-8/12"
    >
      {posts.map((post) => (post.draft ? null : <Post {...post} />))}
    </main>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Posts",
  meta: [
    {
      name: "description",
      content: "Interesting or not articles I wrote.",
    },
  ],
};
