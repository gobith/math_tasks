<script lang="ts">
  import { tasks } from "../stores/session-store";
  import Task from "./Task.svelte";

  console.log($tasks);
</script>

<ul>
  {#each $tasks as task}
    <Task {task} />
  {/each}
</ul>

<style>
  ul {
    border: solid 1px white;
    border-radius: 2px;
    list-style: none;
    padding: 0
  }
</style>
