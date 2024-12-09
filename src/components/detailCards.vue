<template>
  <div class="font-roboto pt-20">
    <div class="min-h-screen bg-white flex justify-center items-center">
      <div class="bg-white rounded-lg overflow-hidden max-w-3xl w-full p-8">
        <div class="text-center mb-8">
          <img 
            :src="member.image" 
            :alt="member.name"
            class="w-36 h-36 rounded-full object-cover mx-auto border-4 border-orange-500 shadow-md transform hover:scale-105 transition-all"
          />
          <h1 class="text-4xl font-bold text-gray-900 mt-4">{{ member.name }}</h1>
          <p class="text-xl text-gray-500 mt-2">{{ member.peran }}</p>
        </div>

        <div class="text-gray-700 text-lg leading-relaxed">
          <p class="font-semibold text-gray-600 mb-4">Bio</p>
          <p class="mb-8">
            {{ member.deskripsi }}
          </p>

          <div class="flex justify-center space-x-6">
            <a 
              :href="member.wa" 
              target="_blank" 
              class="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
            >
              <img src="../assets/icons/whatsapp-icon.png" alt="WhatsApp Icon" class="w-6 h-6 mr-2" />
              WhatsApp
            </a>
            <a 
              :href="member.ig" 
              target="_blank" 
              class="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all"
            >
              <img src="../assets/icons/instagram-icon.png" alt="Instagram Icon" class="w-6 h-6 mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailCards",
    props: ["id"],
    data() {
      return {
        member: {},
      };
    },
    mounted() {
      const members = [
        {
          id: "11221030",
          image: "/img_about_us/Wiranto.png",
          name: "Wiranto",
          peran: "Frontend Developer",
          deskripsi: "GLORY GLORY MANCHESTER CITY",
          wa: "https://wa.me/+62 813-4838-3245",
          ig: "https://instagram.com/wiiranto_",
        },
        {
          id: "11221070",
          image: "/img_about_us/Glenn.png",
          name: "Glenn Gladly Gessong",
          peran: "Frontend Developer",
          deskripsi: "Love Coding",
          wa: "https://wa.me/+62 813-9560-2460",
          ig: "https://instagram.com/glenngladly._",
        },
        {
          id: "11221058",
          image: "/img_about_us/Dion2.png",
          name: "Dion Prayoga",
          peran: "Frontend Developer",
          deskripsi:
            "Hello, I'm Dion Prayoga, currently studying at the Kalimantan Institute of Technology as an informatics student. I have expertise in software engineering, web development, electrical engineering, graphic design, and photography.",
          wa: "https://wa.me/+62 811-590-976",
          ig: "https://instagram.com/dionp3",
        },
        {
          id: "11221034",
          image: "/img_about_us/Iqbal.png",
          name: "Iqbal Fahrozi",
          peran: "Frontend Developer",
          deskripsi: "Love Gaming",
          wa: "https://wa.me/+62 812-5679-4893",
          ig: "https://instagram.com/iqbalfhrzii",
        },
        {
          id: "11221022",
          image: "/img_about_us/Hanafi.png",
          name: "Hanafi Mas'uul P",
          peran: "Chill guy",
          deskripsi:
            "Chill guy",
          wa: "https://wa.me/+62 852-4850-1177",
          ig: "https://instagram.com/fii.hans",
        },
      ];
      this.member = members.find((member) => member.id === this.id) || {};
    },
  };
</script>

<style scoped>
</style>
