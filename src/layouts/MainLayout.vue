<template>
    <header>
        <Header />
    </header>

    <main>
        <router-view></router-view> <!-- Contenuto dinamico -->
    </main>

    <footer>
        <Footer />
    </footer>
</template>
  

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: "MainLayout",
    components: {
        Header,
        Footer
    }
}
</script>