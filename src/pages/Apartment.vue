<template>
    <div v-if="!isbusy">
        <h1 class="text-center">Apartment Page</h1>

        <div>
            <div>
            <h3>{{ apartment.name }}</h3>
            <p>Indirizzo:</p>
        </div>
        <div>
            <h3>Info principali</h3>
            <p>Prezzo:€</p>
            <p>Sconto:%</p>
            <p>Metratura:mq</p>
            <p>N.Stanze:</p>
            <p>N.Bagni</p>
            <p>in affitto da:</p>
        </div>
        <div>
            <h3>Descrizione</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dignissimos rem enim repudiandae. Repellendus
                velit rerum iure sequi repellat quis explicabo vero eum quos doloribus labore eius obcaecati, provident
                quod.
            </p>
        </div>
        </div>

        
    </div>
</template>

<script>
import Apartment from "../api/Apartment";

export default {
    name: "Apartment",

    data() {
        return {
            isbusy: true,
            apartment: null,
        };
    },
    async created() {
        const response = await Apartment.getOne(this.$route.params.id);
        response.error ? this.$router.push({name:'notFound'}) : ()=>{this.apartment=response;this.isbusy = false;}
        
    },
  
}
</script>

<style lang="scss" scoped></style>