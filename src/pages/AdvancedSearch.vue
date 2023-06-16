<script>
import CardImg from '../components/icons/CardImg.vue';
export default {
    name: "AdvancedSearch",
    components: {
        CardImg
    }
}
</script>

<template>
    <div class="container ">

        <div class="custom-container py-5">
            <div class="input-group rounded pb-5">
                <input type="search" class="form-control rounded" aria-label="Search" placeholder="Old-ricerca"
                    aria-describedby="search-addon" />
                <a href="" class="icon ps-4">
                    <font-awesome-icon icon="magnifying-glass" />
                </a>
                <a href="" class="icon ps-4">
                    <font-awesome-icon icon="sliders" />
                </a>
            </div>
        </div>
            <div class="container p-0 d-flex justify-content-between">
                <CardImg />
            <CardImg />
            <CardImg />
            <CardImg />
            </div>


            



    </div>
</template>

<style lang="scss" scoped>
@import '../assets/partials/variables';

.icon {
    font-size: 1.75rem;
    color: $custom-black;
}</style>