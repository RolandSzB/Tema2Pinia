<template>
  <div>
    <button
      v-if="!inEditMode"
      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      type="button"
      @click="toggleEditMode"
    >
      Add List
    </button>

    <form v-else @submit.prevent="toggleEditMode" class="max-w-md mx-auto">
      <div class="mb-2">
        <label for="list-title" class="text-sm font-medium text-gray-900"
          >Title</label
        >
        <input
          type="text"
          id="list-title"
          class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter title"
          required
          v-model="title"
        />
      </div>
      <div class="mb-2">
        <label for="list-description" class="text-sm font-medium text-gray-900"
          >Description</label
        >
        <textarea
          id="list-description"
          class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter description"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-2">
        <label for="list-type" class="text-sm font-medium text-gray-900"
          >Type</label
        >
        <select
          id="list-type"
          v-model="type"
          class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>Select type</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="social">Social</option>
          <option value="important">Important</option>
        </select>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Add List
      </button>
    </form>
  </div>
</template>

<script setup>
import { useTodoStore } from "../stores/todo";
import { ref } from "vue";

const todoStore = useTodoStore();

const title = ref("");
const description = ref("");
const type = ref("");
const inEditMode = ref(false);

function addNewList() {
  todoStore.lists.push({
    title: title.value,
    description: description.value,
    type: type.value,
    tasks: [],
  });
}

function toggleEditMode() {
  if (inEditMode.value) {
    addNewList();
    inEditMode.value = false;
  } else {
    title.value = "";
    description.value = "";
    type.value = "";
    inEditMode.value = true;
  }
}
</script>
