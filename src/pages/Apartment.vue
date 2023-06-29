<template>
    <div class="container my-container" v-if="!isbusy">
        <h1 class="d-flex justify-content-center">{{ apartment.name }}</h1>
        <div class="my-subtitle">
            <h4>Published by: {{ apartment.user.name }}</h4>
        </div>
        <div>
            <div class="row">
                <div class="my-img-container">
                    <img :src="activePic" alt="..." class="my-img rounded" id="thumbnail" />
                    <div class="my-img-thumb-container">
                        <img :src="images" alt="" class="my-img-thumb rounded thumbnail"
                            :class="{ active: index == indexOfActive ? true : false }" @click="selectedImage(index)"
                            v-for="(images, index) in getAllImages">
                    </div>

                </div>
            </div>
            <div class="my-detail-container">
                <div class="my-detail">
                    <div class="col-lg-6 my-info-container">
                        <div>
                            <h3 class="my-info d-flex justify-content-center">Main Info</h3>
                            <ul class="ps-0">
                                <li>
                                    Price: <strong>{{ apartment.price }}€</strong>
                                </li>
                                <li>
                                    M²: <strong>{{ apartment.square_meters }} mq</strong>
                                </li>
                                <li>
                                    Rooms: <strong>{{ apartment.rooms }}</strong>
                                </li>
                                <li>
                                    Bathrooms: <strong>{{ apartment.bathrooms }}</strong>
                                </li>

                                <li>
                                    For Rent From: <strong>{{ convertDateFormat(apartment.create_at) }}</strong>
                                    <!-- modificare formato ora -->
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

                <div class="my-message-container">
                    <AppMessage :apartment_id="apartment.id" />
                </div>



            </div>


        </div>

    </div>
</template>

<script>
import Apartment from "../api/Apartment";
import Service from '../api/Service';
import AppMessage from "../components/PageDetails/AppMessage.vue";
import { watchEffect } from 'vue';
import moment from 'moment';

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
            timeStamp: null,

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
        },

        convertDateFormat(date) {
            return moment(date).format('DD-MM-YYYY');
        }

    }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 993px) {
    h1 {
        margin: 3.125rem 0 3.125rem 0;
    }

    p {
        margin: 0;
    }

    .my-detail-container {
        display: flex;
        justify-content: space-between;
        margin: 20px 50px;

    }

    .my-detail {
        width: 50%;

    }

    .my-info-container {
        margin-top: 50px;


        h3 {
            display: flex;
            justify-content: center;
        }
    }

    .my-img-thumb-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .my-container {
        box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
        background-color: white;
        border-radius: 10px;
        padding: 1.875rem 0 1.875rem 0;
        margin: 1.875rem auto 1.875rem auto;
    }

    .services-container {
        padding-top: 15px;

        ul {
            padding: 0;
        }

        h3 {
            display: flex;
            justify-content: center;
        }
    }

    .description-container {
        padding-top: 30px;

        h3 {
            display: flex;
            justify-content: center;
        }
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

        max-width: 75%;
    }

    .my-img-thumb {
        width: 70%;
        max-height: 120px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
    }

    .my-message-container {
        margin: 0 50px 0 0;
        width: 40%;

    }

    .my-img-container {
        display: flex;
        justify-content: center;
        margin-left: 40px;
    }
}

@media only screen and (min-width: 577px) and (max-width: 992px) {

    h1 {
        margin: 3.125rem 0 3.125rem 0;
        text-align: center;
    }

    p {
        margin: 0;
    }


    .my-img-thumb-container {
        display: flex;
        flex-direction: row;


    }

    .my-img-thumb {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        width: 70%;
        max-height: 100px;
    }

    .my-img-container {
        margin: 0px 0px 60px 10px;
        padding: 0;

    }

    .my-container {

        background-color: white;
        width: 100vw;

    }

    .services-container {
        margin-top: 1.875rem;
        padding: 0px 6.25rem;

        ul {
            display: flex;
            flex-wrap: wrap;
        }
    }

    .description-container {

        margin: 2.5rem 0;
        padding: 0 50px;
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
        margin-left: 15%;
        max-width: 70%;

    }

    .my-img-thumb {
        max-width: 17%;
        height: auto;
        margin: 1% 1%;
    }

    .my-message-container {
        margin: auto;
        width: 80%;
        margin-bottom: 6.25rem;
    }

    .my-info-container {
        display: flex;
        justify-content: center;
    }

}


@media only screen and (max-width: 576px) {
    h1 {
        margin: 3.125rem 0 3.125rem 0;
        padding-top: 1.875rem;
        text-align: center;
    }

    p {
        margin: 0;
    }

    .my-img-thumb-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

    }

    .my-img-thumb {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        width: 70%;
        max-height: 120px;
    }

    .my-img-container {
        margin: 0px 0px 60px 10px;
        padding: 0;

    }

    .my-container {

        background-color: white;
        width: 100%;

    }

    .services-container {
        margin-top: 1.875rem;
        padding: 0 50px;

        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
        }
    }

    .description-container {

        margin: 2.5rem 0;
        padding: 0 50px;
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
        margin-left: 1%;
        max-width: 95%;

    }

    .my-img-thumb {
        max-width: 30%;
        height: auto;
        margin: 1% 1%;
    }

    .my-message-container {
        margin: auto;
        width: 100%;
        margin-bottom: 6.25rem;
    }

    .my-info-container {
        padding: 0 50px;
        ;

        h3 {
            display: flex;
            justify-content: center;
        }

    }



}
</style>


