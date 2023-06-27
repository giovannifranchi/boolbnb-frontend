<template>
    <div class="container" v-if="!isbusy">
        <h1 class="d-flex justify-content-center">{{ apartment.name }}</h1>
        <div class="my-subtitle">
            <h4>Published by: {{ apartment.user.name }}</h4>
        </div>
        <div>
            <div class="row d-flex justify-content-center">
                <div class="d-flex justify-content-center">
                    <img :src="activePic" alt="..." class="my-img rounded" id="thumbnail" />
                    <div class="d-flex flex-column gap-1">
                        <img :src="images" alt="" class="my-img-thumb rounded thumbnail d-flex flex-column"
                            :class="{ active: index == indexOfActive ? true : false }" @click="selectedImage(index)"
                            v-for="(images, index) in getAllImages">
                    </div>

                </div>
            </div>
            <div class=" row mt-5 ">
                <div class="col-lg-6 d-flex justify-content-center">
                    <div>
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
                </div>
                <div class="col-lg-6 d-flex justify-content-center">
                    <h3>Servizi</h3>
                    <ul>
                        <li v-for="service in services">
                            <p> {{ services.name }}</p>

                        </li>
                    </ul>

                </div>
                <div>
                    <h3>Descrizione</h3>
                    <p>{{ apartment.description }}
                    </p>
                </div>
            </div>


        </div>
        <div class="my-message-container mt-5">
            <AppMessage :apartment_id="apartment.id" />
        </div>
    </div>
</template>

<script>
import Apartment from "../api/Apartment";
import Service from '../api/Service';
import AppMessage from "../components/PageDetails/AppMessage.vue";


export default {
    name: "Apartment",
    components: {
        AppMessage
    },

    data() {
        return {
            isbusy: true,
            apartment: null,

            services: {
                type: Object,
            },
            images: [],
            activePic: null,
            indexOfActive: 0

        };
    },
    async created() {
        const response = await Apartment.getOne(this.$route.params.id);
        // response.error ? this.$router.push({name:'notFound'}) : ()=>{this.apartment=response;this.isbusy = false;}
        this.apartment = response;
        this.isbusy = false;
    },

    computed: {
        getAllImages() {
            if (this.apartment) {
                // let images = [this.apartment.thumb];
                this.images.push(this.apartment.thumb);
                this.apartment.images.forEach((image) => {
                    this.images.push(image.path);
                });
                console.log(this.images)
                return this.images;

            }
        },
    },

    methods: {
        selectedImage(index) {
            this.activePic = this.getAllImages[index];
            this.indexOfActive = index;
            console.log(this.activePic)
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    margin: 3.125rem 0 3.125rem 0;
}

.my-subtitle {
    border-top: 5px solid rgb(46, 204, 113);
    border-bottom: 5px solid rgb(46, 204, 113);
    margin: 0 2.5rem 5rem 2.5rem;
    padding: 1rem 0 1rem 0;
}

.thumbnail {
    cursor: pointer;
    transition: all 0.2s;
}

.thumbnail:hover {
    scale: 1.04;
}

.active {
    border: 2px solid rgb(46, 204, 113);
}

.my-img {

    max-width: 800px;
}

.my-img-thumb {
    width: 200px;
    margin-left: 10px;
}

.my-message-container {
    margin: auto;
    width: 50%;

}
</style>