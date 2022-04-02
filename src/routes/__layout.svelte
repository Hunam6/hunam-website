<script context="module">
  export function addLinkHoverEffect() {
    const cursorDot = document.querySelector('.cursor-dot')
    const cursorCircle = document.querySelector('.cursor-circle')

    document.querySelectorAll('a').forEach(el => {
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.4
        })
        cursorCircle.style.backgroundColor = 'transparent'
      })
      el.addEventListener('mouseover', () => {
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.4
        })
        cursorCircle.style.backgroundColor = 'var(--yellow)'
      })
    })
  }
</script>

<script>
  import Image from 'svelte-image'
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'

  onMount(() => {
    if (!('ontouchstart' in document.documentElement)) {
      const cursorDot = document.querySelector('.cursor-dot')
      const cursorCircle = document.querySelector('.cursor-circle')

      cursorDot.style.display = 'block'
      cursorCircle.style.display = 'block'
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.4
      })
      cursorCircle.style.backgroundColor = 'transparent'

      window.addEventListener('mousemove', cursor)
      function cursor(e) {
        gsap.to(cursorDot, {
          x: Math.round(e.clientX - 3),
          y: Math.round(e.clientY - 3),
          duration: 0
        })
        gsap.to(cursorCircle, {
          x: Math.round(e.clientX - 25),
          y: Math.round(e.clientY - 25),
          duration: 0.8
        })
      }

      addLinkHoverEffect()
    }
  })
</script>

<header>
  <span>
    <Image
      src="/assets/favicon.png"
      alt="Hunam logo"
      lazy={false}
      class="hunam-img"
      wrapperClass="hunam-wrapper"
      width="50"
      height="50"
    />
    <h2>Hunam</h2>
  </span>
  <nav>
    <a sveltekit:prefetch href="/">/home</a>
    <a sveltekit:prefetch href="/projects">/projects</a>
    <a sveltekit:prefetch href="/posts">/posts</a>
    <a sveltekit:prefetch href="/contact">/contact</a>
  </nav>
</header>
<slot />

<style>
  header {
    margin-top: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.hunam-img) {
    width: auto;
    height: auto;
  }

  :global(.hunam-wrapper) {
    margin-right: 2rem;
    width: 5vh !important;
    display: flex !important;
    align-items: center;
  }
  h2 {
    color: var(--white);
    font-weight: 600;
  }

  nav {
    text-align: center;
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--yellow);
    margin: auto 0.25rem;
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }

    :global(.hunam-wrapper) {
      width: 7.5vh !important;
    }
    h2 {
      font-size: 2rem;
    }

    nav {
      margin-top: 0;
      padding-left: 1rem;
    }
    a {
      padding: 1rem;
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1441px) {
    :global(.hunam-wrapper) {
      width: 6.5vh !important;
    }
    h2 {
      font-size: 1.5rem;
    }

    a {
      font-size: 1.125rem;
    }
  }
</style>
