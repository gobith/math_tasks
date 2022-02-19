<script lang="ts">
  import { task, toggle_back, check_task } from "../stores/session-store";

  const numberPressed = (number) => {
    if (value) {
      value = parseInt(`${value}${number}`);
    } else {
      value = number;
    }
  };

  const enterPressed = () => {
    check_task(value);
    value = undefined;
  };

  const backspacePressed = () => {
    if (!value) {
      return;
    }

    let valueString = value.toString();
    if (valueString.length === 1) {
      value = undefined;
    } else {
      value = parseInt(valueString.substring(0, valueString.length - 1));
    }
  };

  let value;
</script>

<div>
  <button class="back" on:click={toggle_back}> &larr; </button>

  <div class="task">{$task.task_string()}</div>

  <div class="keyboard">
    <input class="input" type="number" bind:value />

    <button
      class="one"
      on:click={() => {
        numberPressed(1);
      }}>1</button
    >
    <button
      class="two"
      on:click={() => {
        numberPressed(2);
      }}>2</button
    >
    <button
      class="three"
      on:click={() => {
        numberPressed(3);
      }}>3</button
    >

    <button
      class="four"
      on:click={() => {
        numberPressed(4);
      }}>4</button
    >
    <button
      class="five"
      on:click={() => {
        numberPressed(5);
      }}>5</button
    >
    <button
      class="six"
      on:click={() => {
        numberPressed(6);
      }}>6</button
    >

    <button
      class="seven"
      on:click={() => {
        numberPressed(7);
      }}>7</button
    >
    <button
      class="eight"
      on:click={() => {
        numberPressed(8);
      }}>8</button
    >
    <button
      class="nine"
      on:click={() => {
        numberPressed(9);
      }}>9</button
    >

    <button
      class="zero"
      on:click={() => {
        numberPressed(0);
      }}>0</button
    >

    <button class="backspace" on:click={backspacePressed}>&larr;</button>

    <button class="enter" on:click={enterPressed}>&crarr;</button>
  </div>
</div>

<style>
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

  button {
    padding: 15px 32px;
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

  button:active {
    border-color: black;
    color: black;
  }
  .keyboard {
    display: grid;
    gap: 10px;
    grid-template-areas:
      "u u u u"
      "a b c s"
      "d e f ."
      "g h i r"
      ". z . r";
  }
  .one {
    grid-area: a;
  }
  .two {
    grid-area: b;
  }
  .three {
    grid-area: c;
  }
  .four {
    grid-area: d;
  }
  .five {
    grid-area: e;
  }
  .six {
    grid-area: f;
  }
  .seven {
    grid-area: g;
  }
  .eight {
    grid-area: h;
  }
  .nine {
    grid-area: i;
  }
  .zero {
    grid-area: z;
  }

  .input {
    grid-area: u;
    color: white;
    font-size: 30px;
    background-color: transparent;
    text-align: center;
  }

  .enter {
    grid-area: r;
  }

  .backspace {
    grid-area: s;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: inner-spin-button;
    display: inline-block;
    cursor: default;
    flex: 0 0 auto;
    align-self: stretch;
    -webkit-user-select: none;
    opacity: 0;
    pointer-events: none;
    -webkit-user-modify: read-only;
  }
</style>
