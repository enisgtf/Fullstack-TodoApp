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
import { RouterLink, useRouter } from "vue-router"
import { reactive } from 'vue'
import axios from "axios";
import { useUserStore } from "../stores/store";
import { storeToRefs } from "pinia";

const router = useRouter()
const store = useUserStore()
const {isLoggedIn, todos, user, token } = storeToRefs(store)

const loginUser = reactive({
    email: '',
    password: '',
})


const login = async () => {
    await axios.post("/api/login", loginUser).then(res => {
        token.value = res.data.token
        user.value = res.data.user
        todos.value = res.data.todos
        isLoggedIn.value = true
        axios.defaults.headers.token = res.data.token
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        router.push('/')
        alert(res.data.message)
    }).catch(err => {
        alert(err.response.data.message)
    })
}




</script>