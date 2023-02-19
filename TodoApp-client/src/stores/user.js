import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
      token: null,
      user: undefined,
      userTodos: [],
      isLoggedIn: false
  }),
  getters: {
    getNotDoneTodos(state){
      if(state.userTodos.length){
        return state.userTodos.filter(todo => {
         return todo?.done === false
        })
      } 
  }
},
  actions: {
    addTodo(value){
      this.userTodos.push(value)
    }
  }
})
