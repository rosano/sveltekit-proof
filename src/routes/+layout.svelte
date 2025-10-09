<script>
import 'normalize.css';
import favicon from '$lib/assets/favicon.svg';

import { page, updated } from '$app/state';
let { children, data } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="{ page.data.viewport || 'width=device-width, initial-scale=1' }" />
	
	<link rel="icon" href={favicon} />
	<title>{ page.data.title }</title>
</svelte:head>

<header>
	<nav>
		{#each data.navigation as section, index}
			{#if index}&nbsp;·&nbsp;{/if}<a href="{section.path}">{section.title}</a>
		{/each}
	</nav>
</header>

{@render children?.()}

{#if updated.current}
	<div class="toast">
		<p>A new version of the app is available</p>
		<button onclick={() => location.reload()}>reload the page</button>
	</div>
{/if}

<style>
.toast {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
}

.toast p {
	display: flex;
	align-items: center;
	gap: 1rem;
	background: var(--bg-2);
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	border-radius: 4px;
}
</style>
