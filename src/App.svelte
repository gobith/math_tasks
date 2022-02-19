<script lang="ts">
  import { task } from "./stores/session-store";
  import General from "./components/General.svelte";
  import Task from "./components/Task.svelte";
</script>

<div class="center">
  {#if $task === null}
    <General />
  {:else}
    <Task />
  {/if}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
  :global(body) {
    font-family: "Orbitron", sans-serif;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #006994;
    position: relative;
  }
</style>
