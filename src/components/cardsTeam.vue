<template>
    <div  class="group hover:bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300">
      <img :src="image" alt="" class="w-32 h-32 mx-auto mb-4 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
      <h3 class="text-lg text-center font-medium text-gray-800">{{ name }}</h3>
      <p class="text-sm text-center text-gray-600">{{ peran }}</p>
      <p class="text-sm text-center text-gray-600">{{ teknologi  }}</p>
      <button @click="goToDetailMember" class="text-left text-sm p-1 shadow-md rounded-lg bg-[#FDB750]">Detail</button>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            peran: {
                type: String,
                required: true
            },
            teknologi: {
                type: String,
                required: true
            },
        },

        methods: {
            goToDetailMember(){
                this.$router.push(`/members/${this.id}`);
            },
        },
    }
</script>