<template>
    <div class="font-roboto pt-20">
      <div class="min-h-screen bg-white flex justify-center items-center">
        <div class="bg-white rounded-lg overflow-hidden max-w-3xl w-full p-8">
          <!-- Profile Image and Name Section -->
          <div class="text-center mb-8">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-36 h-36 rounded-full object-cover mx-auto border-4 border-orange-500 shadow-md transform hover:scale-105 transition-all"
            />
            <h1 class="text-4xl font-bold text-gray-900 mt-4">{{ member.name }}</h1>
            <p class="text-xl text-gray-500 mt-2">{{ member.peran }}</p>
          </div>
  
          <!-- Bio Section -->
          <div class="text-gray-700 text-lg leading-relaxed">
            <p class="font-semibold text-gray-600 mb-4">Bio</p>
            <p class="mb-4">
              {{ member.deskripsi }}
            </p>
            <p class="mb-8">
              {{ member.deskripsi }}
            </p>
  
            <!-- Contact Buttons -->
            <div class="flex justify-center space-x-6">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                class="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
              >
                <span class="text-lg mr-2">📱</span>
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/iqbalfahrozi" 
                target="_blank" 
                class="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all"
              >
                <span class="text-lg mr-2">📷</span>
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
            }
        },

        mounted() {
            const members = [
                {
                    id:"11221030",
                    image: "/img_about_us/Wiranto.png",
                    name: "Wiranto",
                    peran: "Frontend Developer",
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc at eleifend. In hac habitasse platea dictumst. Nam vehicula consequat augue, id sagittis felis consequat a. Nullam rutrum scelerisque dolor nec pharetra. Donec id felis at augue lacinia fermentum",
                    wa: "https://wa.me/1234567890",
                    ig: "https://instagram.com/iqbalfahrozi"
                },
                {
                    id:"11221070",
                    image: "/img_about_us/Glenn.png",
                    name: "Glenn Gladly Gessong",
                    peran: "Frontend Developer",
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc at eleifend. In hac habitasse platea dictumst. Nam vehicula consequat augue, id sagittis felis consequat a. Nullam rutrum scelerisque dolor nec pharetra. Donec id felis at augue lacinia fermentum",
                    wa: "https://wa.me/1234567890",
                    ig: "https://instagram.com/iqbalfahrozi"
                },
                {
                    id:"11221058",
                    image: "/img_about_us/Dion2.png",
                    name: "Dion Prayoga",
                    peran: "Frontend Developer",
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc at eleifend. In hac habitasse platea dictumst. Nam vehicula consequat augue, id sagittis felis consequat a. Nullam rutrum scelerisque dolor nec pharetra. Donec id felis at augue lacinia fermentum",
                    wa: "https://wa.me/1234567890",
                    ig: "https://instagram.com/iqbalfahrozi"
                },
                {
                    id:"11221034",
                    image: "/img_about_us/Iqbal.png",
                    name: "Iqbal Fahrozi",
                    peran: "Frontend Developer",
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc at eleifend. In hac habitasse platea dictumst. Nam vehicula consequat augue, id sagittis felis consequat a. Nullam rutrum scelerisque dolor nec pharetra. Donec id felis at augue lacinia fermentum",
                    wa: "https://wa.me/1234567890",
                    ig: "https://instagram.com/iqbalfahrozi"
                },
                {
                    id:"11221022",
                    image: "/img_about_us/Hanafi.png",
                    name: "Hanafi Mas'uul P",
                    peran: "Frontend Developer",
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc at eleifend. In hac habitasse platea dictumst. Nam vehicula consequat augue, id sagittis felis consequat a. Nullam rutrum scelerisque dolor nec pharetra. Donec id felis at augue lacinia fermentum",
                    wa: "https://wa.me/1234567890",
                    ig: "https://instagram.com/iqbalfahrozi"
                },
            ];

            this.member = members.find((member) => member.id === this.id) || {};
        }

    }
</script>