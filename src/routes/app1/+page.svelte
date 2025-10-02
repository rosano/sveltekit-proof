<script>
let count = $state(0);

function increment() {
	count += 1;
}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<h1>SPA</h1>

<button onclick={increment}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
