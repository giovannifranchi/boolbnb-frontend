<template>
    <div class="container my-container" v-if="!isbusy">
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
                        <h3 class="my-info d-flex justify-content-center ">Main Info</h3>
                        <ul class="ps-0">
                            <li>
                                Price: {{ apartment.price }}€
                            </li>
                            <li>
                                M²: {{ apartment.square_meters }} mq
                            </li>
                            <li>
                                Rooms: {{ apartment.rooms }}
                            </li>
                            <li>
                                Bathrooms: {{ apartment.bathrooms }}
                            </li>

                            <li>
                                For Rent From: {{ apartment.created_at }} <!-- modificare formato ora -->
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center services-container">
                    <div>
                        <h3 class="my-info d-flex justify-content-center">Services</h3>
                        <ul class="d-flex gap-3 flex-wrap">
                            <li v-for="(service, index) in apartment.services" class="">
                                <p><font-awesome-icon aria-expanded="false" :icon="service.icon_url" class="icon" /> {{
                                    service.name }}</p>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="description-container">
                    <h3 class="my-info d-flex justify-content-center">Description</h3>
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
import { watchEffect } from 'vue';


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
            indexOfActive: 0,


        };
    },
    async created() {
        const response = await Apartment.getOne(this.$route.params.id);
        // response.error ? this.$router.push({name:'notFound'}) : ()=>{this.apartment=response;this.isbusy = false;}
        this.apartment = response;
        this.isbusy = false;
        if (this.apartment) {
            this.images.push(this.apartment.thumb);
            this.apartment.images.forEach((image) => {
                this.images.push(image.path);
            });
        }
    },
    mounted() {
        watchEffect(() => {
            if (this.images.length > 0) {
                this.activePic = this.images[0];
            }
        });
    },


    computed: {
        getAllImages() {
            if (this.apartment) {
                const allImages = [this.apartment.thumb, ...this.apartment.images.map(image => image.path)];
                return allImages;
            }
            return [];
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

p {
    margin: 0;
}

.my-container {
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    background-color: white;
    border-radius: 10px;
    padding: 1.875rem 0 1.875rem 0;
    margin: 1.875rem auto 1.875rem auto;
}

.services-container {
    padding-right: 165px;
    padding-left: 70px;

}

.description-container {
    padding: 0 165px 0 165px;
    margin: 2.5rem 0 2.5rem 0;
}

.my-subtitle {
    border-top: 3px solid rgb(46, 204, 113);
    border-bottom: 3px solid rgb(46, 204, 113);
    margin: 0 2.5rem 5rem 2.5rem;
    padding: 1rem 0 1rem 0;
}

.my-info {
    border-top: 3px solid rgb(46, 204, 113);
    border-bottom: 3px solid rgb(46, 204, 113);
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
    margin-bottom: 6.25rem;
}
</style>


