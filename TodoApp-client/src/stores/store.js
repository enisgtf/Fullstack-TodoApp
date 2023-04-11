import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    user: {},
    todos: [],
    isLoggedIn: false,
  }),
  getters: {
    getNotDoneTodos(state) {
      if (state.todos?.length) {
        return state.todos.filter((todo) => {
          return todo?.done === false;
        });
      }
    },
    getDoneTodos(state) {
      if (state.todos?.length) {
        return state.todos.filter((todo) => {
          return todo?.done === true;
        });
      }
    },
  },
  actions: {
    async deleteTodo(todo) {
      await axios
        .delete(`/api/todo/${todo._id}`)
        .then((res) => {
          this.todos = this.todos.filter(
            (todoItem) => todoItem._id != todo._id
          );
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    async doneTodo(todo) {
      axios
        .put(`/api/todo/${todo._id}`, todo)
        .then((res) => {
          this.todos.filter((el) => {
            if (el._id === todo._id) {
              el.done = !el.done;
            }
          });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    async checkLocalStorage() {
      if (localStorage.token && localStorage.user) {
        this.token = localStorage.token;
        this.user = JSON.parse(localStorage.user);
        this.isLoggedIn = true;
        axios.defaults.headers.token = localStorage.token;
        await axios.get("http://localhost:5001/api/todo").then((res) => {
          this.todos = res.data;
        });
      } else {
        this.isLoggedIn = false;
        this.user = {};
        this.token = "";
        this.todos = [];
      }
    },
  },
});
