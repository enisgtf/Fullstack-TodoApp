<template>
    <header>
        <div class="logo">
            <img src="../assets/img/todo.png" alt="TodoLogo" style="width:50px">
            <router-link class="navbar_router-link" to="/">TodoApp</router-link>
        </div>
        <div class="navbar">
            <RouterLink class="navbar_router-link" to="/">Home</RouterLink>
            <RouterLink class="navbar_router-link" to="/todos" v-if="store.user !== null">Todos</RouterLink>
        </div>
        <div class="buttons">
            <router-link class="btn blue" to="/login" v-if="store.isLoggedIn === false">Login</router-link>
            <router-link class="btn blue" to="/register" v-if="store.isLoggedIn === false">Register</router-link>
            <router-link class="btn blue" to="/" @click="logout" v-if="store.isLoggedIn !== false">Logout</router-link>
        </div>

</header>
</template>


<script setup>

import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/store';
import { storeToRefs } from 'pinia';

const store = useUserStore()



const logout = () => {
    store.token = null
    store.isLoggedIn = false
    store.userTodos = []
    store.user = undefined
    localStorage.token = null
}

</script>


<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background: var(--clr-white);
    padding: 0 1rem;
    margin-bottom: 2rem;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}
</style>