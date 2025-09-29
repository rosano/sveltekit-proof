<script>
import { fragment } from 'svelte-pathfinder';
const items = [
  'alfa',
  'bravo',
  'charlie',
];
</script>

<h1>hash-route</h1>

{#if $fragment }
<h2>{ $fragment || 'select route' }</h2>  
{/if}

{#each items as item }
  {#if $fragment !== `#${ item }`}
    <p>
      <button class="{ item }" on:click={() => $fragment = item}>{ item }</button>
    </p>
  {/if}
{/each}
