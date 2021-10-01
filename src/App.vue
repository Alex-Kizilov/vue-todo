<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  import TodoForm from "@/components/TodoForm";
  import TodosList from "@/components/TodosList";
  import Main from "@/views/Main";

  export default {
    components: {Main, TodoForm, TodosList}
  }
</script>

<style lang="scss">
  @import "@/scss/styles";

  .container {
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

  }
</style>