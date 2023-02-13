<template>
    <div class="container">
        <form class="login" action="" style="margin-bottom:1rem">
            <h2>Login your account</h2>
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <button type="submit" class="btn">Login</button>
        </form>
        <div class="help-content">
            <router-link to="/register">Don't you have an account?</router-link>
        </div>
    </div>
</template>


<script setup>
import { RouterLink } from "vue-router"

</script>