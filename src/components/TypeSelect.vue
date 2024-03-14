<script setup></script>
<template>
  <div>
    <div class="flex flex-col mb-4">
      <div class="flex">
        <i class="bi bi-pencil-square me-2"></i>
        <p>All</p>
      </div>
      <div class="flex">
        <i class="bi bi-star me-2"> </i>
        <p>Favorites</p>
      </div>
    </div>
    <i class="bi bi-tag text-gray-500 font-semibold"> Labels</i>
    <div class="font-bold">
      <div class="flex text-green-500 hover:bg-green-200 hover:rounded-3xl">
        <i class="bi bi-dot"></i>
        <p>Personal</p>
      </div>
      <div class="flex text-violet-500 hover:bg-violet-200 hover:rounded-3xl">
        <i class="bi bi-dot"></i>
        <p>Work</p>
      </div>
      <div class="flex text-blue-500 hover:bg-blue-200 hover:rounded-3xl">
        <i class="bi bi-dot"></i>
        <p>Social</p>
      </div>
      <div class="flex text-orange-500 hover:bg-orange-200 hover:rounded-3xl">
        <i class="bi bi-dot"></i>
        <p>Important</p>
      </div>
    </div>
  </div>
</template>
