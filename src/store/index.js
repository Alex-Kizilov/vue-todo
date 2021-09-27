import {createStore} from 'vuex'

export default createStore({
  state: () => ({
    todos: [
      {title: 'SOme text', body: 'vue is cool', selected: 'Очень важно', isEnd: false, id: 1},
      {title: 'Some text 2', body: 'vue is cool 2', selected: 'Важно', isEnd: false, id: 2},
      {title: 'Some text 3', body: 'vue is cool 3', selected: 'Очень важно', isEnd: false, id: 3},
    ],
    filters: {
      bySelected: '',
      byIsEnd: ''
    }
  }),
  getters: {
    getTodoById: (state) => (todoId) => {
      return state.todos.find(el => el.id === todoId)
    },
    getTodosByFilters: (state) => {
      const {todos, filters} = state
      const {bySelected, byIsEnd} = filters
      console.log(bySelected, byIsEnd)

        return todos.filter(todo => todo.selected === bySelected && todo.isEnd === byIsEnd)

    },
    getFilters: (state) => {
      return state.filters
    },
    sortTodoByParams: (state) => (params) => {
      return state.todos.filter(el => el[params.field] === params.value)
    }
  },
  actions: {},
  mutations: {
    setTodo(state, todo) {
      state.todos = [...state.todos, todo]
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(el => el.id !== todoId)
    },
    toggleTodoField(state, {todoId, field}) {
      state.todos.find(el => el.id === todoId)[field] = !state.todos.find(el => el.id === todoId)[field]
    },
    setTodoSelected(state, {todoId, selected}) {
      state.todos.find(el => el.id === todoId).selected = !state.todos.find(el => el.id === todoId)[selected]
    },
    setFilter(state, {filterName, filterValue}) {
      state.filters[filterName] = filterValue
    }
  }
})