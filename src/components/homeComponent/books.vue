<script>
    export default {
        props : {
            kategori : String
        }
    }
</script>

<template>
    <div id="container-books">
        <h2 id="title-books">{{ kategori }}</h2>
        <div id="box-books">
            
        </div>
    </div>
</template>

<style scoped>
    #container-books #title-books{
        color: black;
    }

    #box-books{
        border-radius: 20px;
        height: 45vh;
        background-color: rgb(255, 174, 0);
        box-shadow: 0 4px 8px 0 rgba(255, 174, 0, 0.5);
    }
</style>