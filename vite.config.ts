import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypeToc from "@jsdevtools/rehype-toc";

export default defineConfig(async () => {
  return {
    plugins: [
      qwikCity({
        imageOptimization: {
          jsxDirectives: {
            format: "avif",
          },
        },
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: true,
          rehypeAutolinkHeadings: false,
        },
        mdx: {
          rehypePlugins: [
            [rehypeToc, {
              nav: false, 
              headings: ["h2", "h3"],
            }]
          ]
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
});
