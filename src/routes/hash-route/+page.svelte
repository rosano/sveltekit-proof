<script>
import { fragment } from 'svelte-pathfinder';
const items = [
  'alfa',
  'bravo',
  'charlie',
];
</script>

<h1>hash-route</h1>

<h2>{ $fragment || 'select route' }</h2>  

{#each items as item }
  {#if $fragment !== `#${ item }`}
    <p>
      <button class="{ item }" on:click={() => $fragment = item}>{ item }</button>
    </p>
  {/if}
{/each}
