<template>
  <div class="todo-form">
    <form class="todo-form__form" action="" @submit.prevent>
      <input
        class="todo-form__input input"
        required=""
        type="text"
        placeholder="Название"
        v-model="title"
      >
      <textarea
        class="todo-form__textarea textarea"
        required
        placeholder="Описание"
        v-model="body"
      >

      </textarea>
      <my-select v-model="selected">
        <option>Очень важно</option>
        <option>Важно</option>
        <option>Не важно</option>
      </my-select>
      <button
        class="todo-form__btn btn"
        @click="createTodo"
      >
        Создать задачу
      </button>
    </form>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import TodosList from "@/components/TodosList";
  import MySelect from "@/components/UI/MySelect";

  export default {
    name: "todo-form",
    components: {MySelect, TodosList},
    setup(props) {
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
          store.commit('setTodo', {
            title: title.value,
            body: body.value,
            selected: selected.value,
            isEnd: isEnd.value,
            id: Date.now()
          })
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