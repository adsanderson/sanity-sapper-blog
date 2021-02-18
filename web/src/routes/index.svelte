<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      //   const res1 = await this.fetch(`api/x`);
      const res = await this.fetch(`api/dgusa_events`);
      const { dgusa_events } = await res.json();
      console.log(dgusa_events);
      return { dgusa_events };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  import DgusaEvent from "../components/DgusaEvent.svelte";

  export let dgusa_events;
  let y;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<h1>Rewind</h1>

<ul class="stack">
  {#each dgusa_events as dgusa_event, dgusa_event_index}
    <li>
      <DgusaEvent card={dgusa_event} />
    </li>
  {/each}
</ul>

<style>
  .stack {
    --space: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  .stack > * + * {
    margin-top: var(--space);
  }
</style>
