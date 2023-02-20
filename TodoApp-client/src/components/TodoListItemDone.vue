<template>
    <ul>
        <li class="done" v-for="todo in allTodoList">
            <p>{{ todo.todo }}</p>
            <div class="todolist-item-buttons">
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt="done" @click="store.doneTodo(todo)">
                </div>
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=" delete" @click="store.deleteTodo(todo)">
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useUserStore } from '../stores/store';
const store = useUserStore()

const { getDoneTodos } = storeToRefs(store)
const allTodoList = computed(() => getDoneTodos.value?.reverse()) 

</script>