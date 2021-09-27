<template>
  <div class="filter">
    <p>Фильтрация по:</p>
    <my-select
      v-model="opt1"
      @change="fn('byIsEnd', JSON.parse(opt1))"
    >
      <option value="false">В процессе</option>
      <option value="true">Завершено</option>
    </my-select>
    <my-select
      v-model="opt2"
      @change="fn('bySelected', opt2)"
    >
      <option>Очень важно</option>
      <option>Важно</option>
      <option>Не важно</option>
    </my-select>
  </div>
</template>

<script>
  import MySelect from "@/components/UI/MySelect";
  import {useStore} from "vuex";
  import {ref} from "vue";
  export default {
    name: "todo-filter",
    components: {MySelect},
    setup(props) {
      const store = useStore()
      const opt1 = ref('')
      const opt2 = ref('')
      const filters = store.getters.getFilters

      const fn = (filterName, filterValue) => {
        store.commit('setFilter', {filterName, filterValue})
      }

      return {
        filters,
        fn,
        opt1,
        opt2
      }
    }
  }
</script>

<style scoped>

</style>