<!-- src/components/Book.vue -->
<template>
    <div class="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img :src="image" alt="Book cover" class="h-48 w-full object-cover rounded-md mb-4" />
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ price }}</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      }
    }
  }
</script>
  
<style scoped>
  /* Scoped CSS if any additional customization needed */
</style>
  