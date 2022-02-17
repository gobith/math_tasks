<script lang="ts">
  import { check } from "../stores/session-store";

  const numberPressed = (number) => {
    if (value) {
      value = parseInt(`${value}${number}`);
    } else {
      value = number;
    }
  };

  const enterPressed = () => {
    console.log(check(value));
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

<label>
  <input type="number" bind:value />
</label>

<div>
  <div>
    <button
      on:click={() => {
        numberPressed(1);
      }}>1</button
    >
    <button
      on:click={() => {
        numberPressed(2);
      }}>2</button
    >
    <button
      on:click={() => {
        numberPressed(3);
      }}>3</button
    >
    <button on:click={backspacePressed}>&larr;</button>
  </div>
  <div>
    <button
      on:click={() => {
        numberPressed(4);
      }}>4</button
    >
    <button
      on:click={() => {
        numberPressed(5);
      }}>5</button
    >
    <button
      on:click={() => {
        numberPressed(6);
      }}>6</button
    >
  </div>
  <div>
    <button
      on:click={() => {
        numberPressed(7);
      }}>7</button
    >
    <button
      on:click={() => {
        numberPressed(8);
      }}>8</button
    >
    <button
      on:click={() => {
        numberPressed(9);
      }}>9</button
    >
  </div>

  <button
    on:click={() => {
      numberPressed(0);
    }}>0</button
  >
  <button on:click={enterPressed}>&crarr;</button>
</div>

<style>
</style>
