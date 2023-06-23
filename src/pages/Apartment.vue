<template>
    <div class="container" v-if="!isbusy">
        <h1>{{ apartment.name }}</h1>

        <div>
            <div class="row">
                <div class="container-img col-6">
                    <img :src="apartment.thumb" alt="..." />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h3>Info principali</h3>
                    <ul class="ps-0">
                        <li>
                            Prezzo: {{ apartment.price }}€
                        </li>
                        <li>
                            Metratura: {{ apartment.square_meters }} mq
                        </li>
                        <li>
                            N° Stanze: {{ apartment.rooms }}
                        </li>
                        <li>
                            N° Bagni: {{ apartment.bathrooms }}
                        </li>
                        <li>
                            N° Bagni: {{ apartment.bathrooms }}
                        </li>
                        <li>
                            In affitto da: {{ apartment.created_at }} <!-- modificare formato ora -->
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <h3>Servizi</h3>
                    <ul>
                        <li v-for="service in services">
                            <p> {{ services.name }}</p>

                        </li>
                    </ul>

                </div>
            </div>
            <div>
                <h3>Descrizione</h3>
                <p>{{ apartment.description }}
                </p>
            </div>
        </div>


    </div>
</template>

<script>
import Apartment from "../api/Apartment";
import Service from '../api/Service';


export default {
    name: "Apartment",

    data() {
        return {
            isbusy: true,
            apartment: null,
            images: null,
            services: {
                type: Object,
    },
        };
    },
    async created() {
        const response = await Apartment.getOne(this.$route.params.id);
        // response.error ? this.$router.push({name:'notFound'}) : ()=>{this.apartment=response;this.isbusy = false;}
        this.apartment = response;
        this.isbusy = false;
    },

}
</script>

<style lang="scss" scoped></style>