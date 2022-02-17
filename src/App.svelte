<script lang="ts">
  import { session } from "./stores/session-store";
  import General from "./components/General.svelte";
  import Specific from "./components/Specific.svelte";
  
</script>

{#if $session.math_symbol === ""}
  <General />
{:else}
  <Specific />
{/if}

<style>
</style>
