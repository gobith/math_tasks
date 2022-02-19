<script lang="ts">
  import { tasks } from "../stores/session-store";
  import Task from "./Task.svelte";

  console.log($tasks);
</script>

<ol>
  {#each $tasks as task}
    <Task {task} />
  {/each}
</ol>

<style>
  ol {
    border: solid 1px white;
    border-radius: 2px;
    margin-right: 10px;
    list-style: none;
  }
</style>
