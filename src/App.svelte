<script lang="ts">
  import { session } from "./stores/session-store";
  import General from "./components/General.svelte";
  import Specific from "./components/Specific.svelte";
</script>

<div class="center">
  {#if $session.math_symbol === ""}
    <General />
  {:else}
    <Specific />
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
