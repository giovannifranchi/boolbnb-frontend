<!-- TO DO LIST 
- GRAFICA RESPONSIVE ANCORA DA IMPLEMENTARE 
- INSERIRE I LINK A TUTTI I PULSANTI 
- RIVEDERE HEADER E LE VARIE AZIONI -->

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
