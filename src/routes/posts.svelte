<svelte:head>
  <title>Hunam - Posts</title>
  <meta name="description" content="List of my blog posts." />
  <link
    rel="preload"
    href="/fonts/Inconsolata-UltraExpanded-Black.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</svelte:head>
<main>
  <h1>SOON™</h1>
</main>

<style>
  h1 {
    color: var(--white);
    font-size: 3rem;
    text-shadow: -3px -3px 0 var(--bg), 3px -3px 0 var(--bg),
      -3px 3px 0 var(--bg), 3px 3px 0 var(--bg), 4px 4px 0 var(--yellow),
      5px 5px 0 var(--yellow), 6px 6px 0 var(--yellow), 7px 7px 0 var(--yellow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    h1 {
      letter-spacing: 0.5rem;
      font-size: 5rem;
      white-space: nowrap;
    }
  }
</style>
