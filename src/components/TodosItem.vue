<template>
  <div
    class="todo-item"
    @click="routerPush(todo.id)"
  >
    <div class="todo-item__info">
      <h3 class="todo-item__title">{{todo.title}}</h3>
      <p class="todo-item__body">{{todo.body}}</p>
    </div>
    <div class="todo-item__btns">
      <my-select v-model="todo.selected" @click.stop>
        <option>Очень важно</option>
        <option>Важно</option>
        <option>Не важно</option>
      </my-select>
      <button
        class="todo-item__btn-remove btn btn-remove"
        @click.stop="deleteTodo(todo.id)"
      >
        Удалить
      </button>
      <button
        class="todo-item__btn-end btn btn-end"
        @click.stop="toggleIsEnd(todo.id)"
      >
        Завершить
      </button>
    </div>
  </div>
</template>

<script>
  import {useStore} from "vuex";
  import {useRouter} from "vue-router";
  import MySelect from "@/components/UI/MySelect";

  export default {
    name: "todos-item",
    components: {MySelect},
    props: {
      todo: {
        type: Object
      },
    },
    setup(props) {
      const store = useStore()
      const router = useRouter()

      const deleteTodo = (todoId) => {
        store.commit('deleteTodo', todoId)
      }

      const routerPush = (todoId) => {
        router.push(`/todo/${todoId}`)
      }

      const toggleIsEnd = (todoId) => {
        store.commit('toggleTodoField', {todoId, field: 'isEnd'})
      }

      return {
        deleteTodo,
        routerPush,
        toggleIsEnd
      }
    }
  }
</script>

<style scoped lang="scss">
  .todo-item {
    display: flex;
    justify-content: space-between;
    border: 2px solid teal;

    &__title {
      font-size: 24px;
    }

    &__body {
      font-size: 18px;
    }

    &__selected {
      align-self: flex-end;
    }

    &__btns {
      display: flex;
      flex-direction: column;

    }
  }
</style>