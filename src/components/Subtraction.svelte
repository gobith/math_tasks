<script lang="ts">
  let math_sum = {
    value1: 7,
    value2: 6,
    operator: "-",
    operation: (a , b , c) => { return a - b === c}
  };

  console.log(math_sum.operation(7 , 6 , 1))
</script>

<div>{math_sum.value1} {math_sum.operator} {math_sum.value2}</div>

<style>
</style>
