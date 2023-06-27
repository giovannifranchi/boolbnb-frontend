<!-- TO DO LIST 
- GRAFICA RESPONSIVE ANCORA DA IMPLEMENTARE 
- INSERIRE I LINK A TUTTI I PULSANTI 
- RIVEDERE HEADER E LE VARIE AZIONI -->
<template>
    <AppJumbo />

    <AppShowHighlight />

    <AppCallToAction />
</template>

<script>
import AppJumbo from '../components/PageHome/AppJumbo.vue';
import AppShowHighlight from '../components/PageHome/AppShowHighlight.vue';
import AppCallToAction from '../components/PageHome/AppCallToAction.vue';
export default {
    name: "Home",
    components: { AppJumbo, AppCallToAction, AppShowHighlight }
}
</script>
