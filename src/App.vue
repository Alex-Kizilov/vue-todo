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
  @import "@/assets/styles";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

  }
</style>