<template>
  <div class="filter">
    <p class="filter__text">Фильтрация по:</p>
    <div class="filter__body">
      <my-select
        class="filter__select"
        v-model="opt1"
        @change="filterTodos('byIsEnd', JSON.parse(opt1))"
      >
        <option value="false">В процессе</option>
        <option value="true">Завершено</option>
      </my-select>
      <my-select
        class="filter__select"
        v-model="opt2"
        @change="filterTodos('bySelected', opt2)"
      >
        <option>Очень важно</option>
        <option>Важно</option>
        <option>Не важно</option>
      </my-select>
      <my-button
        class="filter__btn btn-clear"
        @click="clearFilters"
      >
        Отчистить фильтры
      </my-button>
    </div>
  </div>
</template>

<script>
  import MySelect from "@/components/UI/MySelect";
  import {useStore} from "vuex";
  import {ref} from "vue";
  import MyButton from "@/components/UI/MyButton";

  export default {
    name: "todo-filter",
    components: {MyButton, MySelect},
    setup(props, context) {
      const store = useStore()
      const opt1 = ref('')
      const opt2 = ref('')
      const filters = store.getters.getFilters

      const clearFilters = () => {
        opt1.value = ''
        opt2.value = ''
        context.emit('clear')
      }

      const filterTodos = (filterName, filterValue) => {
        context.emit('filter', {filterName, filterValue})
      }

      return {
        filters,
        filterTodos,
        clearFilters,
        opt1,
        opt2
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter {
    margin-bottom: 20px;

    &__text {
      font-size: 22px;
    }

    &__body {
      display: flex;
      align-items: center;
    }

    &__select {
      align-self: flex-start;
    }

    &__btn {
      margin-left: 20px;
    }
  }
</style>
