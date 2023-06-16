<template>
    <Header />


    <main>
        <router-view></router-view> <!-- Contenuto dinamico -->
    </main>

    <Footer />
</template>
  

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "MainLayout",
    components: {
        Header,
        Footer
    }
}
</script>