<template>
    <div class="container">
        <form class="signup" style="margin-bottom:1rem" @submit.prevent="register">
            <h2>Create an account</h2>
            <input type="text" placeholder="username" v-model="newUser.username">
            <input type="email" placeholder="email" v-model="newUser.email">
            <input type="password" placeholder="password" v-model="newUser.password">
            <input type="password" placeholder="password again" v-model="passwordAgain">
            <button type="submit" class="btn">Register</button>
        </form>
        <div class="help-content">
            <router-link to="/login">You have an account?</router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router"
import axios from "axios";


const newUser = reactive({
    username: '',
    email: '',
    password: '',
})
const passwordAgain = ref('')


const register = () => {
    if (newUser.password.length < 6) {
        alert('Password must be at least 6 characters!')
    } else {
        if (passwordAgain.value !== newUser.password) {
            alert('passwords are not same!')
        } else {
            axios.post("/api/register", newUser).then((res) => {
                console.log(res)
                if(res.data[1].keyValue){
                    alert('used email or username')
                } else if(res.data[1].errors){
                    alert('this is not an email!')
                }else {
                    alert('your account has been created!')
              }
            }).catch(err =>console.log(err))
        }
    }
}



</script>

