<template>
    <div class="body">
        <Header />


        <main>
            <router-view></router-view> <!-- Contenuto dinamico -->
        </main>

        <Footer />
    </div>
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

<style scoped lang="scss">
.body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
    }
}
</style>