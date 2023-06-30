<template>
  <div class="container d-flex justify-content-center align-items-center mb-4">
    <div class="container">
      <h2 class="mb-4">ADVANCE SEARCH</h2>
      <!-- search bar -->
      <div class="d-flex flex-column">
        <form @submit.prevent="sendPositionButton(foundedItems[0].address)">
          <div class="d-flex">
            <input type="text" name="search" id="search" v-model="inputSearch" :placeholder="position"
              @input="autoComplete(inputSearch)">
            <div class="buttons-container">
              <button class="btn  icon mx-4">
                <font-awesome-icon icon="magnifying-glass" class="icon" />
              </button>
              <button @click="collapse()" class="btn icon" type="button">
                <font-awesome-icon icon="sliders" />
              </button>
            </div>
          </div>
        </form>
        <div>
          <ul v-if="inputSearch">
            <li class="list" v-for="element in foundedItems" @click="sendPosition(element.position, element.address)">
              {{ element.address.streetName || '' + ' ' +
                element.address.municipality + ' ' +
                element.address.country }}
            </li>
          </ul>
        </div>
      </div>
      <!-- /search bar -->
    </div>
  </div>

  <div :class="isOpen ? ' container-fluid px-5' : 'container-fluid'">
    <div class="d-flex">
      <div class="ms-col" :class="isOpen ? 'open' : 'close'">
        <div v-if="apartments.length > 0">
          <h5>{{ apartments.length }} apartments found in {{ apartments[0]['city'] }}</h5>
        </div>
        <div class="row">
          <div :class="isOpen ? 'col-lg-4' : ''" class="col-lg-3 col-md-4 col-sm-12 my-4"
            v-for="apartment in  apartments " :key="apartment.id">
            <CardImg :dataApartment="apartment" :class="storeFilter.activeApartment === apartment.id ? 'ms-active' : ''"/>
          </div>
        </div>
      </div>


      <div :class="isOpen ? 'mx-5 ms-filter-open' : 'ms-filter-close'">
        <!-- OFFCANVAS  -->
        <div>
          <div class="filterContainer">
            <Map :data-array="apartments" :is-open="isOpen"/>
            <!-- Filtri -->
            <DistanceRange />
            <PriceRange />
          </div>
          <ModalFilter />
        </div>
        <!-- /OFFCANVAS  -->
      </div>
    </div>

  </div>
</template>


<script>
import CardImg from "../components/PageAdvancedSearch/CardImg.vue";
import Map from "../components/PageAdvancedSearch/Map.vue";
import ModalFilter from "../components/PageAdvancedSearch/ModalFilter.vue";
import Apartment from "../api/Apartment";
import DistanceRange from "../components/PageAdvancedSearch/DistanceRange.vue";
import PriceRange from "../components/PageAdvancedSearch/PriceRange.vue";
import { storeFilter } from "../store/storeFilter";
import Search from '../api/Search'

export default {
  name: "AdvancedSearch",
  components: {
    CardImg,
    ModalFilter,
    DistanceRange,
    PriceRange,
    Map
  },
  data() {
    return {
      storeFilter,
      apartments: [],
      inputSearch: '',
      foundedItems: [],
      searchRadius: 20,
      position: null,
      isOpen: false,
      isOpenFilter: false,
    };
  },
  mounted() {
    this.searchApartments();
  },
  watch: {
    getRadius(newValue) {
      this.searchAdvanced();
    },
    getMinPrice(newValue) {
      this.searchAdvanced();
    },
    getMaxPrice(newValue) {
      this.searchAdvanced();
    },
    getRooms(newValue) {
      this.searchAdvanced();
    },
    getBeds(newValue) {
      this.searchAdvanced();
    },
    getBaths(newValue) {
      this.searchAdvanced();
    },
    getServices: {
      handler(newValue) {
        this.searchAdvanced();
      },
      deep: true,
    },
  },
  methods: {
    async searchApartments() {
      const response = await Apartment.searchByPosition({
        latitude: this.$route.query.latitude,
        longitude: this.$route.query.longitude,
        radius: this.$route.query.radius,
      });
      this.apartments = response;
      const prices = this.apartments.map(apartment => apartment.price);
      this.storeFilter.biggestPrice = Math.max(...prices);
      this.storeFilter.lowerPrice = Math.min(...prices);
    },
    async searchAdvanced() {
      const response = await Apartment.searchByPosition({
        latitude: this.$route.query.latitude,
        longitude: this.$route.query.longitude,
        radius: this.storeFilter.range,
        minPrice: this.storeFilter.minPrice,
        maxPrice: this.storeFilter.maxPrice,
        rooms: this.storeFilter.rooms,
        baths: this.storeFilter.baths,
        beds: this.storeFilter.beds,
        services: this.storeFilter.selectedServices,
      });
      this.apartments = response;

    },
    async autoComplete(inputSearch) {
      const response = await Search.autocomplete(inputSearch)
      this.foundedItems = response.results
    },
    sendPosition(object, address) {
      this.$router.push({
        name: 'AdvancedSearch',
        query: {
          latitude: object.lat,
          longitude: object.lon,
          radius: this.searchRadius
        }
      });
      this.inputSearch = ''
      this.position = address.streetName || '' + ' ' +
        address.municipality + ' ' +
        address.country
    },
    async sendPositionButton(address) {
      this.$router.push({
        name: 'AdvancedSearch',
        query: {
          latitude: this.foundedItems[0].position.lat,
          longitude: this.foundedItems[0].position.lon,
          radius: this.searchRadius
        }
      });
      const response = await Apartment.searchByPosition({
        latitude: this.foundedItems[0].position.lat,
        longitude: this.foundedItems[0].position.lon,
        radius: this.searchRadius,
      });
      this.apartments = response
      this.inputSearch = ''
      this.position = address.streetName || '' + ' ' +
        address.municipality + ' ' +
        address.country
    },
    collapse() {
      this.isOpen = !this.isOpen
      // setTimeout(() => {
      //   this.isOpen = !this.isOpen
      // }, 1000)
    }
  },
  computed: {
    getRadius() {
      return this.storeFilter.range;
    },
    getMinPrice() {
      return this.storeFilter.minPrice;
    },
    getMaxPrice() {
      return this.storeFilter.maxPrice;
    },
    getRooms() {
      return this.storeFilter.rooms;
    },
    getBaths() {
      return this.storeFilter.baths;
    },
    getBeds() {
      return this.storeFilter.beds;
    },
    getServices() {
      return this.storeFilter.selectedServices;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.ms-col.close {
  transition: all .2s ease-in-out;

  width: 100%;
}

.ms-col.open {
  transition: all .2s ease-in-out;
  width: 70%;
  
}

.ms-filter-open {
  transition: all .2s ease-in-out;
  width: 30%;
  
}

.ms-filter-close {
  transition: all .2s ease-in-out;

  overflow: hidden;
  width: 0;
}

.square-image {
  aspect-ratio: 1/1;
}

.icon {
  font-size: 1.75rem;
  color: white;
}

.ms-row {
  height: 20vh;
  overflow-y: auto;
}

ul {
  padding: 0;
  overflow-x: hidden;

  li {
    margin: 4px 0;
    cursor: pointer;

    a {
      color: $custom-black;
      text-decoration: none;
    }
  }
}

input,
li {
  border: none;
  font-size: 20px;
  border-radius: 10px;
  padding: 5px 20px;
  width: 100%;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.144);
}

.btn-advance {
  background-color: $custom-green;
  padding: 15px;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
}

.buttons-container {
  display: flex;

  button {
    display: flex;
    background-color: $custom-green;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
}

.ms-active {
  background-color: #c1c1c1;
}


@media (min-width: 767px) {
  .ms-row {
    height: 50vh;
  }
}

@media (min-width: 992px) {
  .ms-row {
    height: 70vh;
  }

  .offcanvas {
    width: 25% !important;
  }
}

// .slide-enter-active {
//   transition: transform 0.5s ease;
// }

// .slide-enter {
//   transform: translateX(100%);
// }

// .slide-leave-active {
//   transition: transform 0.5s ease;
// }

// .slide-leave-to {
//   transform: translateX(100%);
// }
</style>
