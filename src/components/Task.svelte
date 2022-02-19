<script lang="ts">
  export let task;
</script>

<li>
  {#if task.outcome}
    <div class="correct">&#10004;</div>
  {:else}
    <div class="incorrect">&#10060;</div>
  {/if}

  <div>{task.value1}</div>
  <div>{task.operator()}</div>
  <div>{task.value2}</div>
  <div>=</div>
  {#if task.anser}
    <div>{task.answer}</div>
  {/if}
</li>

<style>
  li {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 10px;
  }

  div {
    text-align: center;
  }

  .correct {
    color: darkgreen;
  }

  .incorrect {
    color: red;
  }
</style>
