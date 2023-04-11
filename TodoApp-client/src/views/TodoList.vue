<template>
    <div class="container">
        <h3>My Planned Todos</h3>
        <div class="addtodo">
            <form @submit.prevent="addUserTodo">
                <input class="addtodoInput" type="text" placeholder="Add Todo..." v-model="todoModel" id="target">
                <button class="addtodoButton">+</button>
            </form>
        </div>
        <div class="todolist-item">
            <EmptyTodoComp v-if="todoCount === 0" />
            <TodoListItem @todo="getEditValue" />

        </div>
        <div class="hr"></div>
        <div class="todolist-item">
            <TodoListItemDone />

        </div>
    </div>
</template>

<script setup>
import TodoListItem from '../components/TodoListItem.vue';
import TodoListItemDone from '../components/TodoListItemDone.vue';
import EmptyTodoComp from '../components/EmptyTodoComp.vue';
import axios from 'axios';
import { computed, ref } from 'vue';
import { useUserStore } from '../stores/store';




const store = useUserStore()


const todoModel = ref("")

/* new user todo */


const todoCount = computed(() => store.todos?.length)

const addUserTodo = () => {
    const todo = todoModel.value
    const newUserTodo = {
        todo,
        userID: store.user?._id || undefined,
        done: false,
        _id: new Date().getTime()
    }
    axios.post("/api/todo", newUserTodo).then((res) => {
        store.todos.push(newUserTodo)
        todoModel.value = ""
    }).catch(err => {
        alert(err.response.data.message)
    })
}


const getEditValue = (todo) => {
    todoModel.value = todo.todo
    const target = document.getElementById("target");
    target.focus()

}

</script>

<style>
.animations {
    transition-duration: 1s;
}
</style>