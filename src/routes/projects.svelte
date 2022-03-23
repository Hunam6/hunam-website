<script>
	import Image from 'svelte-image';
</script>

<svelte:head>
	<title>Hunam - Projects</title>
	<meta
		name="description"
		content="List of projects I've made, click keep reading to find the blog post coresponding to the project."
	/>
	<link
		rel="preload"
		href="/fonts/Inconsolata-Black.woff2"
		as="font"
		type="font/woff2"
		crossOrigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/Inconsolata-Condensed-Bold.woff2"
		as="font"
		type="font/woff2"
		crossOrigin="anonymous"
	/>
</svelte:head>
<main>
	<article>
		<div class="container">
			<div>
				<p class="name">NAME</p>
				<h2>Go2V</h2>
				<div class="separator" />
				<p class="description">
					Go2V is a Go to V source code translator. This software is able to translate code written
					in Go-lang into V-lang code.
				</p>
			</div>
			<a href="https://github.com/vlang/go2v">Keep reading...</a>
		</div>
		<Image
			src="/assets/projects/go2v.jpeg"
			alt={'Go2V'}
			lazy={false}
			class="project-img"
			wrapperClass="project-wrapper"
			placeholderClass="project-placeholder"
		/>
	</article>
	<article>
		<div class="container">
			<div>
				<p class="name">NAME</p>
				<h2>Goodgle</h2>
				<div class="separator" />
				<p class="description">
					Goodgle is a Google-based metasearch engine. Its goal is to completely anonymize its users
					while still providing an excellent search experience, thanks to Google results and a
					completely redesigned user interface and user experience.
				</p>
			</div>
			<a href="https://github.com/hunam6/goodgle">Keep reading...</a>
		</div>
		<Image
			src="/assets/projects/goodgle.png"
			alt={'Goodgle'}
			lazy={false}
			class="project-img"
			wrapperClass="project-wrapper"
			placeholderClass="project-placeholder"
		/>
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
	}

	.container {
		padding: 0.5rem 1rem 1rem 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: space-between;
	}
	.name {
		font-family: 'Inconsolata Black';
		color: var(--gray);
		margin: 0.5rem 0 0.25rem 0;
	}
	h2 {
		font-family: 'Inconsolata Condensed Bold';
		font-size: 1.25rem;
		color: var(--white);
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
	p {
		color: var(--white);
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 6;
		overflow: hidden;
		margin: 0 0 0.5rem 0;
	}
	a {
		text-decoration: none;
		color: var(--yellow);
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	:global(.project-img) {
		border-radius: 0 0 2.5rem 2.5rem;
	}

	@media (min-width: 768px) {
		article {
			width: 65vw;
			display: flex;
			margin-bottom: 5rem;
			height: 40vh;
		}

		article:nth-child(even) {
			flex-direction: row-reverse;
		}

		.container {
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
		.description {
			font-size: 1.3rem;
			line-height: 130%;
			margin-bottom: 1rem;
		}
		a {
			font-size: 1.3rem;
			letter-spacing: 0.1rem;
		}

		:global(.project-wrapper) {
			max-width: 32.5vw;
			height: 40vh;
		}

		:global(.project-wrapper > div > div) {
			height: 40vh;
		}

		:global(.project-img) {
			border-radius: 0 2.5rem 2.5rem 0;
			height: 40vh;
		}
		:global(article:nth-child(even) .project-img) {
			border-radius: 2.5rem 0 0 2.5rem;
		}
	}
</style>
