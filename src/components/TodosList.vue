<template>
  <div v-for="todo in todos">
    <todo-item v-bind:todo="todo" :key="todo.id"/>
  </div>
</template>

<script>
  import {useStore} from "vuex";
  import TodoItem from "@/components/TodosItem";

  export default {
    name: "todos-list",
    components: {TodoItem},
    setup() {
      const store = useStore()
      const todos = store.getters.getTodosByFilters
      return {store, todos}
    }
  }
</script>

<style scoped>

</style>