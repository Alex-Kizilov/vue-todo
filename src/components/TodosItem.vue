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
      <my-button
        class="todo-item__btn-remove btn btn-remove"
        @click.stop="deleteTodo(todo.id)"
      >
        Удалить
      </my-button>
      <my-button
        class="todo-item__btn-end btn btn-end"
        @click.stop="toggleIsEnd(todo.id)"
      >
        Завершить
      </my-button>
    </div>
  </div>
</template>

<script>
  import {useStore} from "vuex";
  import {useRouter} from "vue-router";
  import MySelect from "@/components/UI/MySelect";
  import MyButton from "@/components/UI/MyButton";

  export default {
    name: "todos-item",
    components: {MyButton, MySelect},
    props: {
      todo: {
        type: Object
      },
    },
    setup(props, context) {
      const store = useStore()
      const router = useRouter()

      // const deleteTodo = (todoId) => {
      //   store.commit('deleteTodo', todoId)
      // }

      const deleteTodo = (todoId) => {
        context.emit('remove', todoId)
      }

      // const routerPush = (todoId) => {
      //   router.push(`/todo/${todoId}`)
      // }

      const routerPush = (todoId) => {
        context.emit('push', todoId)
      }

      // const toggleIsEnd = (todoId) => {
      //   store.commit('toggleTodoField', {todoId, field: 'isEnd'})
      // }

      const toggleIsEnd = (todoId) => {
        context.emit('toggle', todoId)
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