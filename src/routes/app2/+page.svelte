<script>
import Thing from './Thing.svelte';

let things = $state([
	{ id: 1, name: 'apple' },
	{ id: 2, name: 'banana' },
	{ id: 3, name: 'carrot' },
	{ id: 4, name: 'doughnut' },
	{ id: 5, name: 'egg' }
]);
</script>

<h1>SPA</h1>

<button onclick={() => things.shift()}>Remove first thing</button>

{#each things as thing (thing.id)}
<Thing name={thing.name} />
{/each}
