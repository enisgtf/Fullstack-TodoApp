<template>
    <div class="container">
        <form class="login" action="" style="margin-bottom:1rem" @submit.prevent="login">
            <h2>Login your account</h2>
            <input type="email" placeholder="email" v-model="loginUser.email">
            <input type="password" placeholder="password" v-model="loginUser.password">
            <button type="submit" class="btn">Login</button>
        </form>
        <div class="help-content">
            <router-link to="/register">Don't you have an account?</router-link>
        </div>
</div>
</template>


<script setup>
import { RouterLink } from "vue-router"
import { reactive } from 'vue'
import axios from "axios";
import { useUserStore } from "../stores/store";
import { storeToRefs } from "pinia";

const store = useUserStore()
storeToRefs(store)

const loginUser = reactive({
    email: '',
    password: '',
})


const login = async () => {
    await axios.post("/api/login", loginUser).then(res => {
        alert(res.data.message)
        const token = res.data.token
        if (token) {
            store.token = token
            store.isLoggedIn = true
            localStorage.setItem('token', token)
        }
    })
}




</script>