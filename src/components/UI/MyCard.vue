<template>
    <div class="card">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "MyCard"
  }
</script>

<style scoped>
 .card {
   width: 100%;
 }
</style>