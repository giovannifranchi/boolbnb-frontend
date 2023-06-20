<script>
import CardImg from '../components/PageAdvancedSearch/CardImg.vue';
import ModalFilter from '../components/PageAdvancedSearch/ModalFilter.vue';
import Apartment from '../api/Apartment';
export default {
    name: "AdvancedSearch",
    components: {
        CardImg,
        ModalFilter
    },
    data() {
        return {
            aparments: [],
        }
    },
    async mounted() {
        const response = await Apartment.searchByPosition({ latitude: this.$route.query.latitude, longitude: this.$route.query.longitude, radius: 20 });
        this.aparments = response;
    }
}
</script>

<template>
    <div class="container ">
        <!-- search bar -->
        <div class="custom-container py-5">
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
        </div>
        <!-- /search bar -->
        <!-- Modal -->
        <ModalFilter />
        <!-- /Modal -->
        <div class="container p-0 d-flex justify-content-between" v-for="apartment in aparments">
            {{ apartment.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/partials/variables';


.icon {
    font-size: 1.75rem;
    color: $custom-black;
}
</style>