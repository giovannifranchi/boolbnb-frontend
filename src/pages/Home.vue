<!-- TO DO LIST 
- IL CAROSELLO E' BUGGATO QUANDO RITORNA INDIETRO 
- GRAFICA RESPONSIVE ANCORA DA IMPLEMENTARE 
- IMPLEMENTARE TOM TOM PER LA RICERCA GUIDATA NELLA SEARCHBAR
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

<style lang="scss" scoped>
@import '../assets/partials/variables';
</style>