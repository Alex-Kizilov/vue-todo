<template>
  <div class="filter">
    <p>Фильтрация по:</p>
    <my-select
      v-model="opt1"
      @change="filterTodos('byIsEnd', JSON.parse(opt1))"
    >
      <option value="false">В процессе</option>
      <option value="true">Завершено</option>
    </my-select>
    <my-select
      v-model="opt2"
      @change="filterTodos('bySelected', opt2)"
    >
      <option>Очень важно</option>
      <option>Важно</option>
      <option>Не важно</option>
    </my-select>
    <my-button
      @click="clearFilters"
    >
      Отчистить фильтры
    </my-button>
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

      // const filterTodos = (filterName, filterValue) => {
      //   store.commit('setFilter', {filterName, filterValue})
      // }

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

<style scoped>

</style>