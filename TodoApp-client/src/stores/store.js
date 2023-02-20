import { defineStore } from 'pinia'
import axios from "axios";


export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: undefined,
    userTodos: [],
    isLoggedIn: false
  }),
  getters: {
    getNotDoneTodos(state) {
      if (state.userTodos?.length) {
        return state.userTodos.filter(todo => {
          return todo?.done === false
        })
      }
    },
    getDoneTodos(state) {
      if (state.userTodos?.length) {
        return state.userTodos.filter(todo => {
          return todo?.done === true
        })
      }
    },
  },
  actions: {
    async getUserAllInfo(){
      await axios.get("/api/user", {
        headers: {
          Authorization: this.token
        }
      }).then((res) => {
        this.user = res.data
      })
      /* GET USER TODOS */
      await axios.get("/api/todo", {
        headers: {
          userID: this.user?._id || undefined
        }
      }).then((res) => {
        this?.userTodos.push(...res.data);
        this.isLoggedIn = true

      })
    },


    async deleteTodo(todo) {
      await axios.delete("/api/todo", {
        headers: {
          todo_id: todo._id
        }
      }).then(res => {
        if (res.status === 200) {
          this.userTodos = this.userTodos.filter(todoItem => todoItem._id != todo._id)
        } else if (res.status = 204) {
          alert('todo could not found!')
        }
      })
    },
    async doneTodo(todo) {
      axios.put("/api/todo", todo).then(res => {
        if (res.status === 200) {
          this.userTodos.filter((el) => {
            if (el._id === todo._id) {
              el.done = !el.done
            }
          })
        } else if (res.status = 204) {
          alert('todo could not found!')
        }
      })
    },
    checkLocalStorage(){
      if(localStorage.token && localStorage.token != "null"){
        this.token = localStorage.token
        this.userTodos = [] //reset
        this.getUserAllInfo()
      } else {
        this.isLoggedIn = false
      }
    }

  }
})
