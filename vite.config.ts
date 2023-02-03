import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeLazyLoadImg from "rehype-plugin-image-native-lazy-loading";

const config = async () => {
  const rehypeSlug = await import("rehype-slug");
  const rehypeAutolinkHeadings = await import("rehype-autolink-headings");
  const remarkGHNoteWarning = await import(
    "remark-github-beta-blockquote-admonitions"
  );
  return {
    plugins: [
      qwikCity({
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: true,
          rehypeAutolinkHeadings: false,
        },
        mdx: {
          remarkPlugins: [
            [
              remarkGHNoteWarning.default,
              {
                titleLift: true,
                titleUnwrap: true,
                classNameMaps: {
                  title: (title: string) => title.toLowerCase(),
                  block: "not-prose",
                },
              },
            ],
          ],
          rehypePlugins: [
            rehypeSlug.default,
            [
              rehypeToc,
              {
                nav: false,
                position: "afterend",
                headings: ["h2", "h3", "h4", "h5", "h6"],
              },
            ],
            [
              rehypeAutolinkHeadings.default,
              {
                test: ["h2", "h3", "h4", "h5", "h6"],
              },
            ],
            rehypeLazyLoadImg,
          ],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
};

export default defineConfig(config);
