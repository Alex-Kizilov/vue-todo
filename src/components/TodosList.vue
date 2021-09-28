<template>
    <todo-item
      v-for="todo in props.todos"
      v-bind:todo="todo"
      :key="todo.id"
      @remove="deleteTodoById"
      @push="routerPushById"
      @toggle="toggleIsEndById"
    />
</template>

<script>
  import TodoItem from "@/components/TodosItem";

  export default {
    name: "todos-list",
    components: {TodoItem},
    props: {
      todos: {
        type: Array
      }
    },
    setup(props, context) {
      const deleteTodoById = (todoId) => {
        context.emit('remove', todoId)
      }
      const routerPushById = (todoId) => {
        context.emit('push', todoId)
      }

      const toggleIsEndById = (todoId) => {
        context.emit('toggle', todoId)
      }

      return {
        props,
        deleteTodoById,
        routerPushById,
        toggleIsEndById,
      }
    }
  }
</script>

<style scoped>

</style>