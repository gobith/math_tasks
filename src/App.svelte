<script lang="ts">
  import { task } from "./stores/session-store";
  import General from "./components/General.svelte";
  import Specific from "./components/Specific.svelte";
</script>

<div class="center">
  {#if $task === null}
    <General />
  {:else}
    <Specific />
  {/if}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
  :global(body) {
    font-family: "Orbitron", sans-serif;
    box-sizing: border-box;
    background-color: #006994;
    padding: 0;
  }

  .center {
    margin: auto;
    width: 100%;
    max-width: 500px;
  }
</style>
