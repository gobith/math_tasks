<script lang="ts">
  import {
    session,
    value1,
    value2,
    toggle_back,
  } from "../stores/session-store";

  import Keyboard from "./Keyboard.svelte";
</script>

<div class="center">
  <button on:click={toggle_back}> &larr; </button>

  <div>{$value1} {$session.math_symbol} {$value2}</div>

  <Keyboard />
</div>

<style>
  .center {
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>
