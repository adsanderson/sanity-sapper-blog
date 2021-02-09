<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/x`);
      const { post } = await res.json();
      return { post };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  //   export let post;
  let text = "abcdefg";
  let count = 0;

  function handleClick() {
    count = count + 1;
  }
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<h3>{text.substr(count, 2)}</h3>

<button on:click={handleClick}>Click</button>

<p>
  <strong
    >Go to <a href="/blog">/blog</a> to see content loaded from
    <a href="https://www.sanity.io">Sanity</a></strong
  >
</p>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
