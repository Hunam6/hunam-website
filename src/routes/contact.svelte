<script>
  import { onMount } from 'svelte'
  import { addLinkHoverEffect } from './__layout.svelte'

  onMount(() => {
    addLinkHoverEffect()
  })
</script>

<svelte:head>
  <title>Hunam - Contact</title>
  <meta
    name="description"
    content="List of my social accounts/way of contacting me."
  />
</svelte:head>

<main>
  <article>
    <p class="name">NAME</p>
    <h2>Socials/contact</h2>
    <div class="separator" />
    <ul>
      <li>
        <p>
          Github: <a href="https://github.com/hunam6">@Hunam6</a>
        </p>
      </li>
      <li>
        <p>
          Twitter: <a href="https://twitter.com/hunam_">@Hunam_</a>
        </p>
      </li>
      <li>
        <p>
          Discord: <a href="https://discord.com/channels/@me/365942020923064340"
            >Hunam#6067</a
          >
        </p>
      </li>
      <li>
        <p>
          E-mail: <a href="mailto:hunam@disroot.org">hunam@disroot.org</a>
        </p>
      </li>
    </ul>
  </article>
</main>

<style>
  @font-face {
    font-family: 'Inconsolata Black';
    font-display: swap;
    src: url(/fonts/Inconsolata-Black.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Inconsolata Condensed Bold';
    font-display: swap;
    src: url(/fonts/Inconsolata-Condensed-Bold.woff2) format('woff2');
  }

  main {
    margin: 2.5rem 0 0 0;
  }
  article {
    width: 80%;
    margin: 0 auto;
    background: var(--dark-gray);
    border-radius: 2.5rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem 1rem;
  }

  .name {
    font-family: 'Inconsolata Black';
    color: var(--gray);
    text-align: center;
    margin: 0.5rem 0 0.25rem 0;
  }
  h2 {
    font-family: 'Inconsolata Condensed Bold';
    font-size: 1.25rem;
    color: var(--white);
    text-align: center;
    margin: 0;
    letter-spacing: 0.125rem;
  }
  .separator {
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      rgb(255 255 255/0),
      rgb(255 255 255/0.1),
      rgb(255 255 255/0)
    );
    margin: 0.5rem 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-top: 2rem;
    display: block;
    text-align: center;
  }

  a {
    color: var(--yellow);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    article {
      margin-bottom: 5rem;
      width: 32.5vw;
      padding: 2rem;
    }

    .name,
    h2 {
      font-size: 1.5rem;
    }
    .separator {
      margin: 1rem 0;
    }
  }
</style>
