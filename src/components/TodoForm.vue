<template>
  <div class="todo-form">
    <my-form class="todo-form__form" action="" @submit.prevent>
      <my-input v-model="title"/>
      <my-textarea v-model="body"/>
      <my-select v-model="selected">
        <option>Очень важно</option>
        <option>Важно</option>
        <option>Не важно</option>
      </my-select>
      <my-button
        class="todo-form__btn btn"
        @click="createTodo"
      >
        Создать задачу
      </my-button>
    </my-form>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import TodosList from "@/components/TodosList";
  import MySelect from "@/components/UI/MySelect";
  import MyTextarea from "@/components/UI/MyTextarea";
  import MyInput from "@/components/UI/MyInput";
  import MyButton from "@/components/UI/MyButton";
  import MyForm from "@/components/UI/MyForm";

  export default {
    name: "todo-form",
    components: {MyForm, MyButton, MyInput, MyTextarea, MySelect, TodosList},
    setup(props, context) {
      const store = useStore()
      const title = ref('')
      const body = ref('')
      const selected = ref('')
      const isEnd = ref(false)

      const checkForm = () => {
        if (title.value === '' || body.value === '' || selected.value === '') {
          throw new Error('Заполните поля')
        } else if (title.value.length > 20) {
          throw new Error('Поле название должно иметь не более 20 символов')
        }
      }

      const createTodo = () => {
        try {
          checkForm()
          context.emit('add', {title: title.value, body: body.value, selected: selected.value, isEnd: isEnd.value})
        } catch (e) {
          alert(e)
        }
      }

      return {
        title,
        body,
        selected,
        createTodo
      }
    }
  }


</script>

<style scoped lang="scss">
  .todo-form {
    margin-top: 60px;
  }
  .todo-form__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .todo-form__btn {
  }
  .todo-form__select {
  }
</style>