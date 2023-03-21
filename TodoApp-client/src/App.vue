<template>
  <HeaderComp></HeaderComp>
  <RouterView></RouterView>
</template>


<script setup>
import HeaderComp from './components/HeaderComp.vue'
import { RouterView } from 'vue-router';
import { watch } from 'vue';
import { useUserStore } from './stores/store.js';

const store = useUserStore()
store.checkLocalStorage()

watch(() => store.token, async () => {
  /* GET USER INFO */
  if (store.token !== null) {
    store.getUserAllInfo()
  }
})

</script>