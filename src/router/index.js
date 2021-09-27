import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/Main";
import AboutTodo from "@/views/AboutTodo";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/todo/:id',
    component: AboutTodo
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router