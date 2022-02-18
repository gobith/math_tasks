<script lang="ts">
  import { toggle_math_symbol } from "../stores/session-store";

  const pressedAddition = () => {
    toggle_math_symbol("+");
  };

  const pressedSubtraction = () => {
    toggle_math_symbol("-");
  };

  const pressedMultiplication = () => {
    toggle_math_symbol("x");
  };

  const pressedDivision = () => {
    toggle_math_symbol(":");
  };
</script>

<div>
  <button on:click={pressedAddition}> + </button>
  <button on:click={pressedSubtraction}> - </button>
  <button on:click={pressedMultiplication}> x </button>
  <button on:click={pressedDivision}> : </button>
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
