import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../stores/store.js'
import { storeToRefs } from 'pinia'




const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const store = useUserStore()
      const { isLoggedIn } = storeToRefs(store)
      if (isLoggedIn.value) {
        return next('/')
      }
      return next()
    }

  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/todos',
    name: "Todos",
    component: () => import('../views/TodoList.vue'),
    beforeEnter: (to, from, next) => {
      const store = useUserStore()
      const { isLoggedIn } = storeToRefs(store)
      if (!isLoggedIn.value) {
        return next('/')
      }
      return next()
    }

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
