import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Post, type PostProps } from "~/components/cards/post";

export default component$(() => {
  const posts: PostProps[] = [
    {
      title:
        "The Ultimate Guide to Setup Your Own Streaming Service with Sonarr, Radarr, Plex... using Usenet/Torrents",
      slug: "ultimate-guide-setup-streaming-service-sonarr-radarr-plex-usenet-torrents",
      date: "2023-02-03T22:36:51.570Z",
      editedDate: "2023-06-20T21:03:18.694Z",
      image: {
        src: "https://a.storyblok.com/f/237087/2001x1127/f253d22450/plex-homepage.png",
        width: 2001,
        height: 1127,
      },
    },
  ];
  return (
    <>
      <section class="flex flex-col pt-24 pb-12 min-h-screen justify-center mx-5 gap-8 md:mx-96 md:pt-40">
        {posts.map((post, idx) => (
          <Post {...post} key={idx} />
        ))}
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hunam - Posts",
  meta: [
    {
      name: "description",
      content: "I sometimes write articles about anything IT related.",
    },
  ],
};
