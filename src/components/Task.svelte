<script lang="ts">


  export let task;



  let color = task.color();



</script>

<li style="--theme-color: {color}">

<div>{task.value1}</div>
<div>{task.operator()}</div>
<div>{task.value2}</div>
<div>=</div>

{#if task.answer}
<div>{task.answer}</div>
{/if}


</li>

<style>
  li {
  
    display: grid;
    grid-template-columns: repeat(5 , 1fr);
    padding: 10px;
    color: var(--theme-color);
    
    
  }

  div {
    text-align: center;
   
  
  }
  
</style>
