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
		·
		<a href="/markdown-page">markdown-page</a>
		·
		<a href="/redirect">redirect</a>
		·
		<a href="/app1">app1</a>
		·
		<a href="/app2">app2</a>
		·
		<a href="/hash-route">hash-route</a>
	</nav>
</header>

{@render children?.()}
