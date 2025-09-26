<script>
import favicon from '$lib/assets/favicon.svg';

let { children } = $props();

// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
// pages by setting this here, but should prerender as many as possible to
// avoid large performance and SEO impacts
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a href="/">home</a>
		•
		<a href="/guide">guide</a>
		•
		<a href="/redirect">redirect</a>
	</nav>
</header>

{@render children?.()}
