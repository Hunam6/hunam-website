import adapter from '@sveltejs/adapter-auto'
import image from 'svelte-image'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 1024
  },
  preprocess: [image()]
}

export default config
