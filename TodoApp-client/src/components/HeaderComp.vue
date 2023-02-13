<template>
    <header>
        <div class="logo">
            <img src="../assets/img/todo.png" alt="TodoLogo" style="width:50px">
            <router-link class="navbar_router-link" to="/">TodoApp</router-link>
        </div>
        <div class="navbar">
            <RouterLink class="navbar_router-link" to="/">Home</RouterLink>
            <RouterLink class="navbar_router-link" to="/todos">Todos</RouterLink>
        </div>
        <div class="buttons">
            <router-link class="btn blue" to="/login">Login</router-link>
            <router-link class="btn blue" to="/register">Register</router-link>
            <!--             <router-link class="btn blue" to="/">Logout</router-link>-->
        </div>

    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>


<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100vw;
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