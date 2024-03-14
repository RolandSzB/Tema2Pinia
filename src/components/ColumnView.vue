<script setup>
defineProps({
  taskList: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    :class="{
      'bg-green-200': taskList.type == 'work',
      'bg-violet-300': taskList.type == 'personal',
      'bg-blue-200': taskList.type == 'important',
      'bg-orange-200': taskList.type == 'social',
      'hover:bg-green-400': taskList.type == 'work',
      'hover:bg-violet-600': taskList.type == 'personal',
      'hover:bg-blue-400': taskList.type == 'important',
      'hover:bg-orange-400': taskList.type == 'social',
    }"
    class="flex flex-col w-64 h-40 p-1 mx-2 border border-gray-200 rounded-lg shadow justify-between"
  >
    <header class="flex justify-between mx-4 mt-2 text-lg font-bold">
      <div>{{ taskList.title }}</div>
      <div><i class="bi bi-arrows-fullscreen"></i></div>
    </header>
    <main class="mx-4 text-gray-600 font-semibold">
      <div>{{ taskList.description }}</div>
    </main>
    <footer class="mx-4 mb-2">
      <div class="flex justify-between">
        <div class="flex">
          <i class="bi bi-star me-2"></i>
          <i class="bi bi-trash"></i>
        </div>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </footer>
  </div>
</template>
