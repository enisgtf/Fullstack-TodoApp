<template>
    <ul>
        <li v-for="todo in allTodoList" :key="todo._id" @click="log">
            <p>{{ todo.todo }}</p>
            <div class="todolist-item-buttons">
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/4476/4476194.png" alt="edit" @click="editTodo(todo)">
                </div>
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt="done"
                        @click="store.doneTodo(todo)">
                </div>
                <div class="todolist-item-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=" delete"
                        @click="store.deleteTodo(todo)">
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
const { getNotDoneTodos } = storeToRefs(store)
const emit = defineEmits(['todo'])


const allTodoList = computed(() => getNotDoneTodos.value?.reverse())

const editTodo = (todo) => {
emit('todo', todo)
store.deleteTodo(todo)
}

</script>

<style scoped>
</style>