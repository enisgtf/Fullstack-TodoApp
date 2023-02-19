<template>
    <div class="container">
        <h3>My Planned Todos</h3>
        <div class="addtodo">
            <form @submit.prevent="addUserTodo">
                <input class="addtodoInput" type="text" placeholder="Add Todo..." v-model="newUserTodo.todo">
                <button class="addtodoButton">+</button>
            </form>
        </div>
        <div class="todolist-item">
            <EmptyTodoComp />
            <TodoListItem />

        </div>
        <div class="hr"></div>
        <div class="todolist-item">
            <TodoListItemDone />

        </div>
        <DeleteComp v-if="deleteItem" />
    </div>
</template>

<script setup>

import TodoListItem from '../components/TodoListItem.vue';
import TodoListItemDone from '../components/TodoListItemDone.vue';
import EmptyTodoComp from '../components/EmptyTodoComp.vue';
import DeleteComp from '../components/DeleteComp.vue';
import axios from 'axios';
import { useUserStore } from '../stores/user';


const store = useUserStore()

const deleteItem = false;

console.log(store);

/* new user todo */
const newUserTodo = {
    todo: "",
    userID: store.user?._id || undefined,
    done: false
}

const addUserTodo = () => {
     axios.post("/api/todo", newUserTodo).then((res) => {
        if (res.status === 204) {
            alert("todo can't be empty!")
        } else if (res.status === 201) {
            alert(res.data.message)
            store.addTodo(newUserTodo)
        }
    })
}


</script>

<style></style>