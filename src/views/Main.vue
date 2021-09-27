<template>
  <todo-form/>
  <todo-filter/>
  <todos-list/>
</template>

<script>
  import TodoForm from "@/components/TodoForm";
  import TodosList from "@/components/TodosList";
  import TodoFilter from "@/components/TodoFilter";
  export default {
    name: "Main",
    components: {TodoFilter, TodosList, TodoForm}
  }
</script>

<style scoped>

</style>