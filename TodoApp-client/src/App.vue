<template>
  <HeaderComp></HeaderComp>
  <RouterView></RouterView>
  <button @click="log">a</button>
</template>


<script setup>
import HeaderComp from './components/HeaderComp.vue'
import { RouterView } from 'vue-router';
import { watch } from 'vue';
import { useUserStore } from './stores/store.js';
import { onBeforeUnmount } from 'vue';

const store = useUserStore()


function log(){
  console.log(store);
}

store.checkLocalStorage()

watch(() => store.token, async () => {
  /* GET USER INFO */
  if (store.token !== null) {
    store.getUserAllInfo()
  }
})

</script>