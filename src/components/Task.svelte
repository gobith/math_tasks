<script lang="ts">
  import {
    task , toggle_back
  } from "../stores/session-store";

  import Keyboard from "./Keyboard.svelte";
</script>

<div class="center">
  <button class="back" on:click={toggle_back}> &larr; </button>

  <div class="task">{$task.task_string()}</div>

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
