<script lang="ts">
  import { toggle_operator } from "../stores/session-store";

  const pressedAddition = () => {
    toggle_operator("+");
  };

  const pressedSubtraction = () => {
    toggle_operator("-");
  };

  const pressedMultiplication = () => {
    toggle_operator("x");
  };

  const pressedDivision = () => {
    toggle_operator(":");
  };
</script>

<div>
  <button on:click={pressedAddition}> + </button>
  <button on:click={pressedSubtraction}> - </button>
  <button on:click={pressedMultiplication}>&#215;</button>
  <button on:click={pressedDivision}>&#247;</button>
</div>

<style>
  button {
    /* border: none; */
    padding: 15px 32px;
    margin: 10px;
    /* border-style: none; */
    color: white;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    background-color: transparent;
    font-size: 30px;
  }

  button:hover {
    border-color: black;
    color: black;
  }

  div {
    /* border: inset; */

    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>
