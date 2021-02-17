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

  export let dgusa_events
  let y

  function getClass(cardIndex, scrollPositionY) {
    // const offset = 32 + 38 + 16
    const cardHeight = 400
    const cardGap = 30
    const cardTop = (cardHeight + cardGap) * cardIndex
    const cardBottom = cardTop + cardHeight

    return scrollPositionY > cardTop && scrollPositionY < cardBottom
  }
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<h1>Rewind</h1>

<Stack>
  {#each dgusa_events as dgusa_event, dgusa_event_index}
    <DgusaEvent card={dgusa_event} isMain={getClass(dgusa_event_index, y)} />
  {/each}
</Stack>
