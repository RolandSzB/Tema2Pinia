<script setup>
import ColumnView from "./ColumnView.vue";
import ColumnAdd from "./ColumnAdd.vue";
import TypeSelect from "./TypeSelect.vue";
import { useTodoStore } from "../stores/todo";

const todoStore = useTodoStore();

import { onMounted } from "vue";
onMounted(() => {
  if (localStorage.getItem("todo-lists") !== null) {
    todoStore.lists = JSON.parse(localStorage.getItem("todo-lists"));
  }
});

todoStore.$subscribe((mutation, state) => {
  todoStore.saveToLocalStorage();
});

function emptyToDoLists() {
  todoStore.$reset();
  // todoStore.saveToLocalStorage();
}
</script>
<template>
  <h1>TODO list</h1>
  <div class="flex">
    <div class="px-8">
      <ColumnAdd></ColumnAdd>
      <TypeSelect></TypeSelect>
    </div>
    <div class="h-screen border-2 border-gray-300"></div>
    <ColumnView v-for="list in todoStore.lists" :taskList="list"></ColumnView>
  </div>
  <footer>
    <button
      @click="emptyToDoLists"
      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-2 py-1.5 text-center me-1 mb-1"
    >
      <i class="bi bi-trash3"></i>
      Reset List
    </button>
  </footer>
</template>
