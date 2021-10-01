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
    @select="setSelect"
  />
</template>

<script>
  import TodoForm from "@/components/TodoForm";
  import TodosList from "@/components/TodosList";
  import TodoFilter from "@/components/TodoFilter";
  import {useStore} from "vuex";
  import {computed} from "vue";
  import {useRouter, useRoute} from "vue-router";
  import MyButton from "@/components/UI/MyButton";
  export default {
    name: "Main",
    components: {MyButton, TodoFilter, TodosList, TodoForm},
    setup(props) {
      const store = useStore()
      const route = useRoute()
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
        router.push('/')
      }

      const toggleIsEnd = (todoId) => {
        store.commit('toggleTodoField', {todoId, field: 'isEnd'})
      }

      const filterTodos = (options) => {
        store.commit('setFilter', options)
        console.log([options.filterName])
        router.push({
          query: {...route.query, [options.filterName]: options.filterValue}
        })
      }

      const setSelect = (payload) => {
        store.commit('setTodoSelected', payload)
      }

      return {
        todos,
        addPost,
        deleteTodo,
        routerPushByIdTodo,
        clearFilters,
        toggleIsEnd,
        filterTodos,
        setSelect,
      }
    }

  }
</script>

<style scoped>

</style>