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
<template >
    <div class="mx-4">


        <!-- Rooms -->
        <div>
            <h5>Numero Stanze</h5>
            <ul class="room-buttons">
                <li class="filter-select" v-for="(room, index) in 7" :key="room">
                    <button class="btn" :class="index === getRooms ? 'active' : ''" @click="setRooms(index)">
                        {{ getBtnValue(index) }}
                    </button>
                </li>
            </ul>
        </div>
        <!-- /Rooms -->
        <!-- beds -->
        <div>
            <h5>Numero Letti</h5>
            <ul class="bed-buttons">
                <li class="filter-select" v-for="(bed, index) in 7" :key="bed">
                    <button class="btn" :class="index === getBeds ? 'active' : ''" @click="setBeds(index)">
                        {{ getBtnValue(index) }}
                    </button>
                </li>
            </ul>
        </div>
        <!-- /beds -->
        <!-- bathrooms -->
        <div>
            <h5>Numero Bagni</h5>
            <ul class="bath-buttons">
                <li class="filter-select" v-for="(bath, index) in 7" :key="bath">
                    <button class="btn" :class="index === getBaths ? 'active' : ''" @click="setBaths(index)">
                        {{ getBtnValue(index) }}
                    </button>
                </li>
            </ul>
        </div>
        <!-- /bathrooms -->
        <!-- services -->
        <div v-if="!isbusy">
            <h5>Servizi</h5>
            <div class="row ps-3">
                <div class="form-check col-6" v-for="service in getServices" :key="service.id">
                    <input class="form-check-input" type="checkbox" :value="service.id" id="check-service"
                        @change="toggleService(service.id)" :checked="getSelectedServices.includes(service.id)" />
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
    </div>
</template>
  
<style lang="scss" scoped>
@import '../../assets/partials/variables';

button {
    border: solid 1px $custom-black;
    border-radius: 1.5625rem;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 3px 15px;

    @media screen and (max-width: 768px) {
        /* Stili per schermi più piccoli di 768px */
        padding: 3px 10px;
    }
}

ul {
    padding-left: 0;
}

.room-buttons,
.bed-buttons,
.bath-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.active {
    background-color: $custom-green;
    color: white;
    font-weight: bold;
    border: 1px $custom-black solid;
}

.btn-positive {
    background-color: $custom-blu;
}

.btn-negative {
    background-color: $custom-red;
}
</style>
  