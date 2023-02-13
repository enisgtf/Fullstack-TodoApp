<template>
    <div class="container">
        <form class="signup" action="" style="margin-bottom:1rem">
            <h2>Create an account</h2>
            <input type="text" placeholder="username">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <button type="submit" class="btn">Register</button>
        </form>
        <div class="help-content">
            <router-link to="/login">You have an account?</router-link>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"

</script>