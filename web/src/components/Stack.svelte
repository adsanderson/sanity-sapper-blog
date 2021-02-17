<div class="stack">
  <slot />
</div>

<style>
  .stack {
    --space: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > :global(*) {
    margin-top: 0;
    margin-bottom: 0;
  }

  .stack > :global(* + *) {
    margin-top: 1.5rem;
  }
</style>
