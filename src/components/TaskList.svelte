<script lang="ts">
  import { tasks } from "../stores/session-store";
  import Task from "./Task.svelte";

  console.log($tasks);
</script>

<div>
  <ul>
    {#each $tasks as task}
      <Task task={task} />
    {/each}
  </ul>
</div> 

<style>
  div {
    border: solid 1px white;
    border-radius: 2px;
    margin-right: 10px;
  }
</style>
