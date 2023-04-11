<template>
  <HeaderComp></HeaderComp>
  <RouterView></RouterView>
  <button @click="log">log</button>
</template>


<script setup>
import HeaderComp from './components/HeaderComp.vue'
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/store.js';


const log = () => {
  console.log(store)
}

const store = useUserStore()
store.checkLocalStorage()





</script>