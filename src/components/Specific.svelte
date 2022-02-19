<script lang="ts">
  import TaskList from "./TaskList.svelte";
  import Calculator from "./Calculator.svelte";
</script>

<div>
  <TaskList />
  <Calculator />
</div>

<style>

    div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 10px;
        
    }
  
</style>
