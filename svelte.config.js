import adapter from '@sveltejs/adapter-cloudflare'
import image from 'svelte-image'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: [image()]
}

export default config
