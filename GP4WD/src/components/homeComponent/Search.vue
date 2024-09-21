<script>
    import bookIcon from '../icon/bookIcon.vue';
    import kreasiKitaIcon from '../icon/kreasiKitaIcon.vue';
    import SearchComponent from '../SearchComponent.vue';

    export default {
        name: 'search',
        components: {
            kreasiKitaIcon,
            bookIcon,
            SearchComponent
        }
    }
</script>

<template>
    <div class="wrap">
        <kreasiKitaIcon />
        <SearchComponent />
        <bookIcon />
    </div>
</template>

<style scoped>
    .wrap {
        display: flex;
        justify-content: space-between;
    }
</style>