<script lang="ts">

import {toggle_math_symbol} from "../stores/session-store";

  const pressedAddition = () => {
    toggle_math_symbol("+")
  };

  const pressedSubtraction = () => {
    toggle_math_symbol("-")
  };

  const pressedMultiplication = () => {
    toggle_math_symbol("x")
  };

  const pressedDivision = () => {
    toggle_math_symbol(":")
  };
</script>
<div>test</div>
<button on:click={pressedAddition}> + </button>
<button on:click={pressedSubtraction}> - </button>
<button on:click={pressedMultiplication}> x </button>
<button on:click={pressedDivision}> : </button>

<style>
</style>
