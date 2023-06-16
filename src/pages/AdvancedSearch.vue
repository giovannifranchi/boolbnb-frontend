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

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
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
}
</style>