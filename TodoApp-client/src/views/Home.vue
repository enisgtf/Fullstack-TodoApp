<template>
    <div class="container">
        <h2>Welcome To My Todo App</h2>
        <div class="account-info">
            <p v-if="store.isLoggedIn !== false">username: {{ store.user.username }} </p>
            <p v-if="store.isLoggedIn !== false">email: {{ store.user.email }} </p>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/store.js';

const store = useUserStore()

</script>

<style scoped>
.account-info {
    margin-top: 2rem;
    text-align: center;
}

.account-info p {
    margin-bottom: 1rem;
    font-size: 2rem;
}
</style>

