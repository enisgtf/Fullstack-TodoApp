import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user.js'
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
        return next('/login')
      }
      return next()
    }

  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


/* const protectedRoutes = [
  "Todos",
  "Login",
  "Register"
]




router.beforeEach((to) => {
  const store = useUserStore()
  const isProtected = protectedRoutes.includes(to.name)
  if (isProtected) {
    if (to.name === "Login" && store.isLoggedIn) return '/'
    if (to.name === "Register" && store.isLoggedIn) return '/'
    if (to.name === "Todos" && !store.isLoggedIn) return '/login'
  }
}) */

export default router
