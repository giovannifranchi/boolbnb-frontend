<!-- TO DO LIST 
- GRAFICA RESPONSIVE ANCORA DA IMPLEMENTARE 
- INSERIRE I LINK A TUTTI I PULSANTI 
- RIVEDERE HEADER E LE VARIE AZIONI -->

import AppCarouselStatic from '../components/PageHome/AppCarouselStatic.vue';
<template>
    <AppJumbo />

    <AppCarouselStatic />

    <AppCallToAction />
</template>

<script>
import AppJumbo from '../components/PageHome/AppJumbo.vue';
import AppCarouselStatic from '../components/PageHome/AppCarouselStatic.vue';
import AppCallToAction from '../components/PageHome/AppCallToAction.vue';
export default {
    name: "Home",
    components: { AppJumbo, AppCallToAction, AppCarouselStatic }
}
</script>
