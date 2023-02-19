<template>
    <ul>
        <li v-for="todo in allTodoList" @click="log">
            <p>{{ todo.todo }} </p>
            <div class="todolist-item-buttons">
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/4476/4476194.png" alt="edit">
                </div>
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt="done">
                </div>
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=" delete">
                </div>
            </div>
        </li>
</ul>
</template>

<script setup>
import { reactive, watch } from 'vue';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';
const store = useUserStore()
storeToRefs(store)

const allTodoList = store.getNotDoneTodos


const log = () => {
    console.log(allTodoList);
}
</script>