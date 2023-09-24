import { component$, $ } from "@builder.io/qwik";
import { type PostcardProps, Postcard } from "~/components/PostCard/postcard";
import PlexHomePage from "~/media/posts/ultimate-guide-setup-streaming-service-sonarr-radarr-plex-usenet-torrents/plex-homepage.png?jsx";

export default component$(() => {
  const posts: PostcardProps[] = [
    {
      title:
        "The Ultimate Guide to Setup Your Own Streaming Service with Sonarr, Radarr, Plex... using Usenet/Torrents",
      slug: "ultimate-guide-setup-streaming-service-sonarr-radarr-plex-usenet-torrents",
      date: "2023-02-03T22:36:51.570Z",
      editedDate: "2023-06-20T21:03:18.694Z",
      image: $(PlexHomePage),
    },
  ];
  return (
    <>
      <section class="flex flex-col pt-24 pb-12 min-h-screen justify-center mx-5 gap-8 md:mx-96 md:pt-40">
        {posts.map((post, idx) => (
          <Postcard {...post} key={idx} />
        ))}
      </section>
    </>
  );
});
