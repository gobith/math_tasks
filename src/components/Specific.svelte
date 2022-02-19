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
  <button class="back" on:click={toggle_back}> &larr; </button>

  <div class="task">{$value1} {$session} {$value2}</div>

  <Keyboard />
</div>

<style>
  .center {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .back {
    color: white;
    box-sizing: border-box;
    cursor: pointer;
    text-align: left;
    background-color: transparent;
    border: none;
  }
  .task {
    text-align: center;
    font-size: 80px;
    color: white;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
