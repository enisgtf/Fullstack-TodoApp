<template>
    <div class="container">
        <h3>My Planned Todos</h3>
        <div class="addtodo">
            <input class="addtodoInput" type="text" placeholder="Add Todo...">
            <button class="addtodoButton">+</button>
        </div>
        <div class="todolist-item">
            <EmptyTodoComp v-if="TodoCount = 0" />
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
import { ref } from '@vue/reactivity';

const deleteItem = false
const TodoCount = ref(1)
</script>

<style>

</style>