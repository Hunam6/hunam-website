<script>
  import { onMount } from 'svelte'

  onMount(() => {
    let solution = 'xuor draner'.split('')
    let keyPressed = []

    document.addEventListener('keydown', ev => {
      keyPressed.push(ev.key)

      // guessed correctly
      if (solution.every((el, idx) => el === keyPressed[idx])) {
        const title = document.getElementsByTagName('h1')[0]
        title.innerHTML = "Joyeux anniversaire<br>à mon Papou que j'❤️!"
        title.style.fontSize = '2rem'
        title.style.color = 'var(--yellow)'
        title.style.textShadow = 'none'
        document.getElementById('heart-1').style.display = 'block'
        document.getElementById('heart-2').style.display = 'block'
        document.getElementById('yo').style.display = 'block'
        // error
      } else if (
        keyPressed.length === solution.length ||
        keyPressed[keyPressed.length - 1] !== solution[keyPressed.length - 1]
      ) {
        keyPressed = []
      }
    })
  })
</script>

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
  <p id="heart-1">❤️</p>
  <p id="heart-2">❤️</p>
  <p id="yo">🤙</p>
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

  #heart-1,
  #heart-2,
  #yo {
    font-size: 10vw;
    position: absolute;
    display: none;
  }
  #heart-1 {
    top: 20%;
    left: 20%;
    transform: rotate(-40deg);
  }
  #heart-2 {
    top: 5%;
    right: 15%;
    transform: rotate(40deg);
  }
  #yo {
    bottom: -10%;
    right: 25%;
    transform: scaleX(-1) rotate(-40deg);
  }
</style>
