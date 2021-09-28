<template>
  <todo-form
    @add="addPost"
  />
  <todo-filter
    @clear="clearFilters"
    @filter="filterTodos"
  />
  <todos-list
    v-bind:todos="todos"
    @remove="deleteTodo"
    @push="routerPushByIdTodo"
    @toggle="toggleIsEnd"
    @filter=""
  />
</template>

<script>
  import TodoForm from "@/components/TodoForm";
  import TodosList from "@/components/TodosList";
  import TodoFilter from "@/components/TodoFilter";
  import {useStore} from "vuex";
  import {computed} from "vue";
  import {useRouter} from "vue-router";
  export default {
    name: "Main",
    components: {TodoFilter, TodosList, TodoForm},
    setup(props) {
      const store = useStore()
      const router = useRouter()
      const todos = computed(() => store.getters.getTodosByFilters)
      const addPost = ({title, body, selected, isEnd}) => {
        store.commit('setTodo', {title, body, selected, isEnd, id: Date.now()})
      }
      const deleteTodo = (todoId) => {
        console.log('deleteWork')
        store.commit('deleteTodo', todoId)
      }
      const routerPushByIdTodo = (todoId) => {
        router.push(`/todo/${todoId}`)
      }
      const clearFilters = () => {
        store.commit('clearFilters')
      }

      const toggleIsEnd = (todoId) => {
        store.commit('toggleTodoField', {todoId, field: 'isEnd'})
      }

      const filterTodos = (options) => {
        console.log('work')
        store.commit('setFilter', options)
      }

      return {
        todos,
        addPost,
        deleteTodo,
        routerPushByIdTodo,
        clearFilters,
        toggleIsEnd,
        filterTodos
      }
    }

  }
</script>

<style scoped>

</style>