<script>
  import Image from 'svelte-image'
</script>

<svelte:head>
  <title>Hunam - Home</title>
  <meta
    name="description"
    content="Hunam's personal website, see my projects & how I made those."
  />
  <link
    rel="preload"
    href="/fonts/Inconsolata-UltraExpanded-Black.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Inconsolata-Expanded-Black.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <style>
    body {
      max-height: 100vh;
      overflow: hidden;
    }
  </style>
</svelte:head>
<main>
  <section>
    <Image
      src="/assets/me.jpg"
      alt="Image of myself"
      lazy={false}
      class="me-img"
      wrapperClass="me-wrapper"
      placeholderClass="me-placeholder"
    />
    <div>
      <h1>Hi, I'm Hunam.</h1>
      <h2>I do modern development.</h2>
    </div>
  </section>
</main>
<footer>
  <a href="https://github.com/hunam6" id="github">Github</a>
  <a href="https://twitter.com/hunam_" id="twitter">Twitter</a>
</footer>

<style>
  @font-face {
    font-family: 'Inconsolata UltraExpanded Black';
    font-display: swap;
    src: url(/fonts/Inconsolata-UltraExpanded-Black.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Inconsolata Expanded Black';
    font-display: swap;
    src: url(/fonts/Inconsolata-Expanded-Black.woff2) format('woff2');
  }

  section {
    background: url('/assets/stroke-mobile.svg') no-repeat;
    position: relative;
    height: 100vh;
    margin: 5.5rem 0.5rem 0 2rem;
  }
  :global(.me-img) {
    border-radius: 50%;
    width: 35vw;
    height: 35vw;
    border: 4px solid var(--yellow);
  }
  :global(.me-wrapper) {
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-50%);
    width: 35vw !important;
    height: 35vw !important;
  }
  :global(.me-placeholder) {
    border-radius: 50%;
  }
  div {
    padding: 20vh 0 0 10vw;
    font-family: 'Inconsolata UltraExpanded Black';
  }
  h1 {
    color: var(--white);
    font-size: 1.25rem;
    text-shadow: -3px -3px 0 var(--bg), 3px -3px 0 var(--bg),
      -3px 3px 0 var(--bg), 3px 3px 0 var(--bg), 4px 4px 0 var(--yellow),
      5px 5px 0 var(--yellow), 6px 6px 0 var(--yellow), 7px 7px 0 var(--yellow);
  }
  h2 {
    color: var(--bg);
    font-size: 1.25rem;
    text-shadow: -1px 0 0 var(--yellow), -1px 1px 0 var(--yellow),
      0 -1px 0 var(--yellow), 0 1px 0 var(--yellow), 1px -1px 0 var(--yellow),
      1px 0 0 var(--yellow);
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    gap: 2vh;
  }
  footer > a {
    color: var(--light-gray);
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-family: 'Inconsolata Expanded Black', sans-serif;
  }
  a::after {
    margin-left: 1rem;
  }
  #github::after {
    content: url('/assets/github.svg');
  }
  #twitter::after {
    content: url('/assets/twitter.svg');
  }

  @media (min-width: 768px) {
    section {
      background: url('/assets/stroke-desktop.svg') no-repeat;
      margin: 25vh 20vw 0 15vw;
    }
    :global(.me-img) {
      height: 15rem;
      width: 15rem;
      border-width: 10px;
    }
    :global(.me-wrapper) {
      height: 15rem !important;
      width: 15rem !important;
    }
    div {
      padding: 10vh 0 0 5vw;
    }

    h1 {
      letter-spacing: 0.5rem;
    }
    h1,
    h2 {
      font-size: 2.5rem;
      white-space: nowrap;
    }
    footer {
      flex-direction: row;
    }
    footer > a {
      font-size: 1rem;
    }
  }

  @media (min-width: 1441px) {
    :global(.me-img) {
      height: 17.5rem;
      width: 17.5rem;
    }
    :global(.me-wrapper) {
      height: 17.5rem !important;
      width: 17.5rem !important;
    }

    h1,
    h2 {
      font-size: 3.5rem;
    }

    footer > a {
      font-size: 1.25rem;
    }
  }
</style>
