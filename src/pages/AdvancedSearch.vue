<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="custom-container py-5">
            <!-- search bar -->
            <div class="input-group rounded pb-5">
                <input type="search" class="form-control rounded" aria-label="Search" placeholder="Old-ricerca"
                    aria-describedby="search-addon" />
                <a href="" class="icon ps-4">
                    <font-awesome-icon icon="magnifying-glass" />
                </a>
                <button type="button" class="btn ps-4 icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <font-awesome-icon icon="sliders" />
                </button>
            </div>
            <!-- /search bar -->

            <!-- Modal -->
            <ModalFilter />
            <!-- /Modal -->

            <div class="container">
                <div class=" row justify-content-center">
                    <CardImg v-for="apartment in apartments" :dataApartment="apartment" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import CardImg from '../components/PageAdvancedSearch/CardImg.vue';
import ModalFilter from '../components/PageAdvancedSearch/ModalFilter.vue';
import Apartment from '../api/Apartment';
import { storeFilter } from '../store/storeFilter';

export default {
    name: "AdvancedSearch",
    components: {
        CardImg,
        ModalFilter
    },
    data() {
        return {
            storeFilter,
            apartments: [],
            searchRadius: 20
        };
    },
    mounted() {
        this.searchApartments();
    },
    watch: {
        getRadius(newValue) {
            this.searchAdvanced(newValue)
            console.log(newValue)
        }
    },
    methods: {
        async searchApartments() {
            const response = await Apartment.searchByPosition({
                latitude: this.$route.query.latitude,
                longitude: this.$route.query.longitude,
                radius: this.$route.query.radius
            });

            this.apartments = response;
        },
        async searchAdvanced(range) {
            const response = await Apartment.searchByPosition({
                latitude: this.$route.query.latitude,
                longitude: this.$route.query.longitude,
                radius: range
            })
            this.apartments = response
            console.log('call')
        }
    },
    computed: {
        getRadius() {
            return this.storeFilter.range
        }
    }
};
</script>
  
<style lang="scss" scoped>
@import '../assets/partials/variables';



.icon {
    font-size: 1.75rem;
    color: $custom-black;
}
</style>