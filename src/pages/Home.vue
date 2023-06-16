<template>
    <AppJumbo />

    <AppCarousel />

    <AppCallToAction />
</template>

<script>
import AppJumbo from '../components/PageHome/AppJumbo.vue';
import AppCarousel from '../components/PageHome/AppCarousel.vue';
import AppCallToAction from '../components/PageHome/AppCallToAction.vue';
export default {
    name: "Home",
    components: { AppJumbo, AppCarousel, AppCallToAction }
}
</script>

<style lang="scss" scoped>
@import '../assets/partials/variables';

.carousel {
    background-color: $custom-black;
    color: $custom-white;
}
</style>