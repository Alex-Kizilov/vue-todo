<template>
  <h1>{{todo.title}}</h1>
  <p>{{todo.body}}</p>
  <button @click="router.push('/')">Главная</button>
</template>

<script>
  import {useRoute, useRouter} from "vue-router";
  import {useStore} from "vuex";

  export default {
    name: "about-todo",

    setup() {
      const store = useStore()
      const route = useRoute()
      const router = useRouter()
      const todo = store.getters.getTodoById(Number(route.params.id))

      return {
        route,
        router,
        store,
        todo
      }
    }
  }
</script>

<style scoped>

</style>