<template>
  <my-card
    class="todo-item"
    @click="routerPush(todo.id)"
  >
    <div class="todo-item__body">
      <my-checkbox
        class="todo-item__checkbox"
        v-model="todo.isEnd"
        @change="toggleIsEnd(todo.id)"
        @click.stop
      />
      <div class="todo-item__info">
        <h3 class="todo-item__title">{{todo.title}}</h3>
        <p class="todo-item__text">{{todo.body}}</p>
      </div>
      <div class="todo-item__btns">
        <my-select class="todo-item__select"
                   v-model="todo.selected"
                   @change="setSelected(todo.id, todo.selected)"
                   v-on:change="setColor"
                   @click.stop
                   ref="root"
        >
          <my-option
            v-for="(option, idx) in options"
            :key="idx"
            :label="option.label"
            :class="option.color"
            @clickOnOption="setColorForSelect"
          >
          </my-option>
        </my-select>
        <i class="fa-solid fa-trash-can todo-item__remove" @click.stop="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </my-card>
</template>

<script>
  import {useStore} from "vuex";
  import {useRouter} from "vue-router";
  import MySelect from "@/components/UI/MySelect";
  import MyButton from "@/components/UI/MyButton";
  import MyCheckbox from "@/components/UI/MyCheckbox";
  import MyCard from "@/components/UI/MyCard";
  import {ref, onMounted} from 'vue'
  import MyOption from "@/components/UI/MyOption";

  export default {
    name: "todos-item",
    components: {MyOption, MyCard, MyCheckbox, MyButton, MySelect},
    props: {
      todo: {
        type: Object
      },
    },
    setup(props, context) {
      const root = ref(null)

      const options = [
        {
          label: 'Очень важно',
          color: 'red'
        },
        {
          label: 'Важно',
          color: 'yellow'
        },
        {
          label: 'Не важно',
          color: 'blue'
        }
      ]

      const setColorForSelect = (color) => {
        console.log(color )
      }

      const deleteTodo = (todoId) => {
        context.emit('remove', todoId)
      }

      const routerPush = (todoId) => {
        context.emit('push', todoId)
      }

      const setSelected = (todoId, selected) => {
        context.emit('select', {todoId, selected})
      }

      const toggleIsEnd = (todoId) => {
        console.log('11')
        context.emit('toggle', todoId)
      }

      const setColor = (event) => {
      }

      return {
        deleteTodo,
        routerPush,
        toggleIsEnd,
        setSelected,
        setColor,
        setColorForSelect,
        root,
        options
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/scss/_variables";

  .todo-item {
    position: relative;
    margin-bottom: 10px;
    &__body {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid $border-color;
      border-radius: 4px;
      transition: .3s;
      &:hover {
        cursor: pointer;
        border: 2px solid $border-color-on-focus
      }
    }

    &__checkbox {
      flex: 0 0 3%;
    }

    &__info {
      flex: auto

    }

    &__title {
      font-size: 24px;
      padding: 10px 0 0 10px;
    }

    &__text {
      font-size: 18px;
      word-break: break-all;
      padding: 10px;
    }

    &__btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 0 0 21%;
      margin-left: 10px;
    }
    &__select {
      position: relative;
      padding: 0 10px;
      margin-right: 10px;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        width: 1px;
        min-height: 100%;
        background-color: $border-color;
      }
    }

    &__remove {
      font-size: 30px;
      margin-right: 10px;
      transition: .3s;
      &:hover {
        color: red;
      }
    }
  }
  .option {
    &-very-important {
      background-color: red;
    }

    &-important {
      background-color: yellow;
    }

    &-unimportant {
      background-color: blue;
    }
  }
</style>