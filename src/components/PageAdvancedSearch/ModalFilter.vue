<script>
import { mapActions, mapGetters } from "vuex";

import { storeFilter } from "../../store/storeFilter";
export default {
    name: "ModalFilter",
    data() {
        return {
            isbusy: true,
            storeFilter
        };
    },
    async created() {
        await this.fetchServices();
        this.isbusy = false;
    },
    computed: {
        ...mapGetters(["getServices"]),

        getSelectedServices() {
            return this.storeFilter.selectedServices;
        },

        getRooms() {
            return this.storeFilter.rooms;
        },

        getBaths() {
            return this.storeFilter.baths;
        },

        getBeds() {
            return this.storeFilter.beds;
        }
    },
    methods: {
        ...mapActions(["fetchServices"]),

        selectService(id) {
            this.storeFilter.selectedServices.push(id);
        },

        removeService(id) {
            this.storeFilter.selectedServices = this.storeFilter.selectedServices.filter((service) => {
                return service !== id;
            });
        },

        getBtnValue(index) {
            if (index === 0) return 'Qualsiasi';
            if (index === 6) return '6+';
            return index;
        },

        setRooms(index) {
            this.storeFilter.rooms = index;
        },

        setBeds(index) {
            this.storeFilter.beds = index;
        },

        setBaths(index) {
            this.storeFilter.baths = index;
        },

        loadFilter() {

        }
    },

}
</script>

<template>
    <!-- Rooms -->
    <div>
        <h5>Numero Stanze</h5>
        <ul class="px-0 pt-2 d-flex">
            <li class="filter-select" v-for="(room, index) in 7" :key="room">
                <button class="btn" :class="index === getRooms ? 'active' : ''" @click="setRooms(index)">{{
                    getBtnValue(index) }}</button>
            </li>
        </ul>
    </div>
    <!-- /Rooms -->
    <!-- beds -->
    <div>
        <h5>Numero Letti</h5>
        <ul class="px-0 pt-2">
            <ul class="px-0 pt-2 d-flex">
                <li class="filter-select" v-for="(bed, index) in 7" :key="bed">
                    <button class="btn" :class="index === getBeds ? 'active' : ''" @click="setBeds(index)">{{
                        getBtnValue(index) }}</button>
                </li>
            </ul>
        </ul>
    </div>
    <!-- /beds -->
    <!-- bathrooms -->
    <div>
        <h5>Numero Bagni</h5>
        <ul class="px-0 pt-2">
            <ul class="px-0 pt-2 d-flex">
                <li class="filter-select" v-for="(bath, index) in 7" :key="bath">
                    <button class="btn" :class="index === getBaths ? 'active' : ''" @click="setBaths(index)">{{
                        getBtnValue(index) }}</button>
                </li>
            </ul>
        </ul>
    </div>
    <!-- /bathrooms -->
    <!-- services -->
    <div v-if="!isbusy">
        <h5>Servizi</h5>
        <div class="row ps-3">
            <div class="form-check col-6" v-for="service in getServices">
                <input class="form-check-input" type="checkbox" :value="service.id" id="check-service"
                    @change="getSelectedServices.includes(service.id) ? removeService(service.id) : selectService(service.id)"
                    :selected="getSelectedServices.includes(service.id)">
                <label class="form-check-label" for="check-service">
                    <div>
                        <font-awesome-icon aria-expanded="false" :icon="service.icon_url" class="icon" />
                        {{ service.name }}

                    </div>
                </label>
            </div>
        </div>
    </div>
    <!-- /services -->
</template>

<style lang="scss" scoped>
@import '../../assets/partials/variables';

button {
    border: solid 1px $custom-black;
    border-radius: 1.5625rem;
    margin-right: 10px;
    padding: 3px 15px;
}

.active {
    background-color: $custom-blu;
    color: $custom-black;
    font-weight: 600;
}



.btn-positive {
    background-color: $custom-blu;
}

.btn-negative {
    background-color: $custom-red;
    /*  } */
}
</style>