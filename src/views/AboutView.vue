<template>
  <div class="font-roboto bg-white min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
    <h1 class="text-5xl mt-20 font-extrabold text-gray-900 mb-10 text-center">About Us</h1>
    <div class="logo flex flex-col gap-10 md:flex-row items-center md:space-x-8 mb-16">
      <img src="@/assets/img/Logo.png" alt="Logo Kreasi Kita" class="h-40 mb-4 md:mb-0" />
      <p class="text-lg text-justify text-gray-600 max-w-lg mb-6">
        Kreasi Kita is a platform for creators to market and sell their work, while allowing fans to provide ongoing financial support to their favorite creators.
      </p>
    </div>
    
    <h2 class="text-2xl font-semibold text-gray-900 mb-16 text-center">Meet Our Team</h2>
    
    <!-- Grid pertama untuk tim atas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16">
      <cardsTeam v-for="(member, index) in teamMembersTop" :key="index" :id="member.id" :image="member.image" :name="member.name" :peran="member.peran" :teknologi="member.teknologi" />
    </div>

    <!-- Grid kedua untuk tim bawah -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
      <cardsTeam v-for="(member, index) in teamMembersBottom" :key="index" :id="member.id" :image="member.image" :name="member.name" :peran="member.peran" :teknologi="member.teknologi" />
    </div>
  </div>
</template>

<script>
import cardsTeam from '@/components/cardsTeam.vue';

export default {
  name: "AboutUs",
  components: {
    cardsTeam,
  },
  data() {
    return {
      teamMembersTop: [
        { id: '11221030', image: 'img_about_us/Wiranto.png', name: 'Wiranto', peran: 'Frontend Developer', teknologi: 'Vue.js' },
        { id: '11221058', image: 'img_about_us/Dion2.png', name: 'Dion Prayoga', peran: 'Frontend Developer', teknologi: 'Vue.js' },
        { id: '11221070', image: 'img_about_us/Glenn.png', name: 'Glen Gladly Gessong', peran: 'Frontend Developer', teknologi: 'Vue.js' }
      ],
      teamMembersBottom: [
        { id: '11221034', image: 'img_about_us/Iqbal.png', name: 'Iqbal Fahrozi', peran: 'Frontend Developer', teknologi: 'Vue.js' },
        { id: '11221022', image: 'img_about_us/Hanafi.png', name: 'Hanafi Masuul P.', peran: 'Frontend Developer', teknologi: 'Vue.js' }
      ]
    };
  }
};
</script>
