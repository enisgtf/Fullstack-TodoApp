<template>
  <HeaderComp></HeaderComp>
  <RouterView></RouterView>
</template>


<script setup>
import HeaderComp from './components/HeaderComp.vue'
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/store.js';



const store = useUserStore()
store.checkLocalStorage()





</script>