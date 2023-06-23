<template>
    <div class="container" v-if="getUserApartments">
        <h1 class="text-center">Apartments Page</h1>

        <div class="row mt-3">
            <div class="col-3" v-for="(apartment, index) in getUserApartments" :key="index">
                <h3 class="text-center">{{ apartment.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';


export default {
    name: "Apartments",
    data(){
        return {
            apartments: [],
        }
    },

    computed: {
        ...mapGetters(["getUserApartments", "getToken"]),
    },

    methods: {
        ...mapActions(["fetchUserApartments"]),
    },

    async created(){
        if(this.getToken){
            await this.fetchUserApartments();
        }
    }
}
</script>

<style lang="scss" scoped></style>