import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: import('../views/Home.vue'),
  },
  {
    path: '/login',
    component: import('../views/Login.vue'),
  },
  {
    path: '/register',
    component: import('../views/Register.vue'),
  },
  {
    path: '/todos',
    component: import('../views/TodoList.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
