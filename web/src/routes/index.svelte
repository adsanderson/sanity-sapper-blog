<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      //   const res1 = await this.fetch(`api/x`);
      const res = await this.fetch(`api/dgusa_events`)
      const { dgusa_events } = await res.json()
      console.log(dgusa_events)
      return { dgusa_events }
    } catch (err) {
      this.error(500, err)
    }
  }
</script>

<script>
  import DgusaEvent from '../components/DgusaEvent.svelte'
  import Stack from '../components/Stack.svelte'
  import x from 'utilities'

  export let dgusa_events
  let y = 0

  function getClass(cardIndex, scrollPositionY) {
    const cardGap = 30
    const cardTop = (cardHeight + cardGap) * cardIndex
    const cardBottom = cardTop + cardHeight

    return scrollPositionY > cardTop && scrollPositionY < cardBottom
  }
  const offset = 32 + 38 + 16
  const cardHeight = 400
  $: highlightIndex = x.findPositionIndex(cardHeight, offset, y) || 0
  // console.log(highlightIndex)
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<h1>Rewind</h1>

<div class="wrapper">
  <Stack>
    {#each dgusa_events as dgusa_event, dgusa_event_index}
      <DgusaEvent card={dgusa_event} isMain={highlightIndex === dgusa_event_index} />
    {/each}
  </Stack>
  <div class="content">
    {dgusa_events[highlightIndex].eventName}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    padding-bottom: 50vh;
  }

  .content {
    position: fixed;
    height: 70vh;
    font-size: 40pt;
    right: 0px;
    background-color: burlywood;
  }
</style>
