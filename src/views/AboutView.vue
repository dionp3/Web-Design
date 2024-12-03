<template>
  <div class="font-roboto">
    <div class="bg-white min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <!-- Logo and Description Section -->
      <h1 class="text-5xl mt-20 font-extrabold text-gray-900 mb-10 text-center">About Us</h1>
      <br>
      <div class="logo flex flex-col gap-10 md:flex-row items-center md:space-x-8 mb-16">
        <img src="@/assets/img/Logo.png" alt="Logo Kreasi Kita" class="h-40 mb-4 md:mb-0" />
        <div class="text-center md:text-left max-w-lg">
          <p class="text-lg text-justify text-gray-600 mb-6">
            Kreasi Kita is a platform for creators to market and sell their work, while allowing fans to provide ongoing financial support to their favorite creators. In this way, creators can earn revenue directly from fans, which supports them to continue creating.
          </p>
        </div>
      </div>

      <!-- Team Members Section -->
      <div class="text-center mb-16">
        <h2 class="text-2xl font-semibold text-gray-900">Meet Our Team</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <!-- Member Card -->
        <div v-for="member in members" :key="member.id" class="text-center group hover:bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300">
          <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300" />
          <h3 class="text-lg font-medium text-gray-800">{{ member.name }}</h3>
          <p class="text-sm text-gray-600">{{ member.id }}</p>
        </div>
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
        { id: "11221030", name: "Wiranto", image: "img_about_us/Wiranto.png" },
        { id: "11221070", name: "Glen Gladly Gessong", image: "img_about_us/Glenn.png" },
        { id: "11221058", name: "Dion Prayoga", image: "img_about_us/Dion2.png" },
        { id: "11221034", name: "Iqbal Fahrozi", image: "img_about_us/Iqbal.png" },
        { id: "11221022", name: "Hanafi Mas'uul P.", image: "img_about_us/Hanafi.png" },
      ],
    };
  },
};
</script>

<style scoped>
/* Semua styling sudah menggunakan Tailwind CSS */
</style>
