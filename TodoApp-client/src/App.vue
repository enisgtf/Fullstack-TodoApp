<template>
  <HeaderComp></HeaderComp>
  <RouterView></RouterView>
<button @click="log">log</button>
</template>


<script setup>


import HeaderComp from './components/HeaderComp.vue'
import { RouterView } from 'vue-router';
import { watch } from 'vue';
import axios from "axios";
import { useUserStore } from './stores/user.js';
import { storeToRefs } from 'pinia';

const store = useUserStore()


/* sil */
function log() {
  console.log(store)
}

watch(() => store.token, async () => {
  /* GET USER INFO */
  if (store.token !== null) {
    await axios.get("/api/user", {
      headers: {
        Authorization: store.token
      }
    }).then((res) => {
      store.user = res.data
    })
    /* GET USER TODOS */
    await axios.get("/api/todo", {
      headers: {
        userID: store.user?._id || undefined
      }
    }).then((res) => {
      store.userTodos.push(...res.data);
    })
  }
})

</script>