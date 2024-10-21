<script>
    import Search from '@/components/homeComponent/Search.vue';
    import description from '@/components/homeComponent/description.vue';
    import books from '@/components/homeComponent/books.vue';


    export default {
        name: 'HomeView',
        components: {
            Search,
            description,
            books
        }
    };
</script>

<template>
    <div class="container">
        <div id="home-page">
            <Search />,
            <description />,
            <books kategori="Flash Sale"/>,
            <books kategori="Rekomendasi"/>
        </div>
    </div>
</template>



<style scoped>
    .container {
        padding: 50px 150px;
        height: 100vh;
        background-image: url(../assets/img/bg-img.jpeg); 
        background-size: cover;
    }

    .container::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
    }

    #home-page{
        margin-top: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
        z-index: 10;
    }
</style>