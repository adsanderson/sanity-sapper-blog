<script>
  /**
   * @type {{eventName: string}}
   */
  export let card
  export let isMain
  function getClass(isMain) {
    console.log('here')
    if (isMain) {
      return 'content main'
    }
    return 'content'
  }
</script>

<div class="card">
  <div class={getClass(isMain)}>
    <h3>{card.eventName}</h3>
  </div>
</div>

<style>
  .card {
    height: 400px;
    width: 400px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    background-color: aquamarine;
    opacity: 0.4;
    transform: scale(0.8);
  }
  .main {
    transform: none;
    opacity: 1;
  }
</style>
