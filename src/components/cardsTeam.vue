<template>
    <div>
      <!-- Member Card -->
      <div
        class="group hover:bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
        @click="openModal"
      >
        <img
          :src="image"
          alt=""
          class="w-32 h-32 mx-auto mb-4 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        <h3 class="text-lg text-center font-medium text-gray-800">{{ name }}</h3>
        <p class="text-sm text-center text-gray-600">{{ peran }}</p>
        <p class="text-sm text-center text-gray-600">{{ teknologi }}</p>
        <button
          @click.stop="openModal"
          class="mt-4 text-center text-sm py-2 px-4 shadow-md rounded-lg bg-[#FDB750] hover:bg-[#e0a543] transition-colors duration-300 mx-auto block"
        >
          Detail
        </button>
      </div>
  
      <!-- Modal for Member Detail -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-lg p-8 w-2/3 md:w-1/2 lg:w-1/3">
          <div class="text-center mb-8">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-36 h-36 rounded-full object-cover mx-auto border-4 border-orange-500 shadow-md"
            />
            <h1 class="text-4xl font-bold text-gray-900 mt-4">{{ member.name }}</h1>
            <p class="text-xl text-gray-500 mt-2">{{ member.peran }}</p>
          </div>
  
          <div class="text-gray-700 text-lg leading-relaxed">
            <p class="font-semibold text-gray-600 mb-4">Bio</p>
            <p class="mb-8">{{ member.deskripsi }}</p>
  
            <div class="flex justify-center space-x-6">
              <a
                :href="member.wa"
                target="_blank"
                class="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full shadow-lg"
              >
                <img src="../assets/icons/whatsapp.png" alt="WhatsApp Icon" class="w-6 h-6 mr-2" />
                WhatsApp
              </a>
              <a
                :href="member.ig"
                target="_blank"
                class="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg"
              >
                <img src="../assets/icons/instagram.png" alt="Instagram Icon" class="w-6 h-6 mr-2" />
                Instagram
              </a>
            </div>
          </div>
  
          <button
            @click="closeModal"
            class="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      peran: {
        type: String,
        required: true,
      },
      teknologi: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isModalOpen: false,
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
          wa: "https://wa.me/6281348383245",
          ig: "https://instagram.com/wiiranto_",
        },
        {
          id: "11221070",
          image: "/img_about_us/Glenn.png",
          name: "Glenn Gladly Gessong",
          peran: "Frontend Developer",
          deskripsi: "Love Coding",
          wa: "https://wa.me/6281395602460",
          ig: "https://instagram.com/glenngladly._",
        },
        {
          id: "11221058",
          image: "/img_about_us/Dion2.png",
          name: "Dion Prayoga",
          peran: "Frontend Developer",
          deskripsi:
            "Hello, I'm Dion Prayoga, currently studying at the Kalimantan Institute of Technology as an informatics student. I have expertise in software engineering, web development, electrical engineering, graphic design, and photography.",
          wa: "https://wa.me/62811590976",
          ig: "https://instagram.com/dionp3",
        },
        {
          id: "11221034",
          image: "/img_about_us/Iqbal.png",
          name: "Iqbal Fahrozi",
          peran: "Frontend Developer",
          deskripsi: "Love Gaming",
          wa: "https://wa.me/6281256794893",
          ig: "https://instagram.com/iqbalfhrzii",
        },
        {
          id: "11221022",
          image: "/img_about_us/Hanafi.png",
          name: "Hanafi Mas'uul P",
          peran: "Chill guy",
          deskripsi: "Chill guy",
          wa: "https://wa.me/6285248501177",
          ig: "https://instagram.com/fii.hans",
        },
      ];
      this.member = members.find((member) => member.id === this.id) || {};
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  