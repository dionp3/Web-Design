<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
    <!-- Logo and Description Section -->
    <h1 class="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
    <div class="flex flex-col md:flex-row items-center md:space-x-8 mb-12">
      <img src="@/assets/img/Logo.png" alt="Logo Kreasi Kita" class="h-24 mb-4 md:mb-0" />
      <div class="text-center md:text-left max-w-lg">
        <p class="text-lg text-gray-600">
          Kreasi Kita is a platform for creators to market and sell their work, while allowing fans to provide ongoing financial support to their favorite creators. In this way, creators can earn revenue directly from fans, which supports them to continue creating.
        </p>
      </div>
    </div>

    <!-- Team Members Section -->
    <div class="text-center mb-8">
      <h2 class="text-2xl font-semibold text-gray-900">Member of Team 4 Design Web B</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      <!-- Member Card -->
      <div v-for="member in members" :key="member.id" class="text-center">
        <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
        <h3 class="text-lg font-medium text-gray-800">{{ member.name }}</h3>
        <p class="text-sm text-gray-600">{{ member.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      members: [
        { id: "11221030", name: "Wiranto", image: "@/assets/img/Wiranto.png" },
        { id: "11221070", name: "Glen Gladly Gessong", image: "@/assets/img/Glenn.png" },
        { id: "11221058", name: "Dion Prayoga", image: "@/assets/img/Dion.png" },
        { id: "11221034", name: "Iqbal Fahrozi", image: "@/assets/img/Iqbal.png" },
        { id: "11221022", name: "Hanafi Mas'uul P.", image: "@/assets/img/Hanafi.png" },
      ],
    };
  },
};
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
