<template>
  <div class="container__todo">
    <todos-item
      class="todo__about"
      :todo="todo"
      @remove="deleteTodo"
      @toggle="toggleIsEnd"
      @select="setSelect"
    />
    <my-button @click="router.push('/')">Главная</my-button>
  </div>

</template>

<script>
  import {useRoute, useRouter} from "vue-router";
  import {useStore} from "vuex";
  import MyButton from "@/components/UI/MyButton";
  import TodosItem from "@/components/TodosItem";

  export default {
    name: "about-todo",
    components: {TodosItem, MyButton},
    setup() {
      const store = useStore()
      const route = useRoute()
      const router = useRouter()
      const todo = store.getters.getTodoById(Number(route.params.id))

      const deleteTodo = (todoId) => {
        store.commit('deleteTodo', todoId)
        router.push('/')
      }
      const setSelect = (payload) => {
        store.commit('setTodoSelected', payload)
      }
      const toggleIsEnd = (todoId) => {
        store.commit('toggleTodoField', {todoId, field: 'isEnd'})
      }

      return {
        route,
        router,
        store,
        todo,
        setSelect,
        toggleIsEnd,
        deleteTodo
      }
    }
  }
</script>

<style scoped>
  .container__todo {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>