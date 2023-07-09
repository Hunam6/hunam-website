import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(async () => {
  return {
    plugins: [qwikCity({
      mdxPlugins: {
        remarkGfm: true,
        rehypeSyntaxHighlight: true,
        rehypeAutolinkHeadings: true
      },
      mdx: {
        remarkPlugins: [
          [(await import('remark-github-beta-blockquote-admonitions')).default, {classNameMaps: {
            title: (title: string) => title.toLowerCase(),
            block: (title: string) => title.toLowerCase() + '-block',
          },}]
        ],
        rehypePlugins: []
      }
    }), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
