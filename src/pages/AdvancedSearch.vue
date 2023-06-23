<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="custom-container py-5">
      <!-- search bar -->
      <div class="d-flex flex-column pb-5">
        <form @submit.prevent="sendPositionButton(foundedItems[0].address)">
          <div class="d-flex">
            <input type="text" name="search" id="search" v-model="inputSearch" :placeholder="position"
              @input="autoComplete(inputSearch)">
            <div class="buttons-container">
              <button class="btn  icon"><font-awesome-icon icon="magnifying-glass" class="icon" /></button>
              <button type="button" class="btn icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <font-awesome-icon icon="sliders" />
              </button>
            </div>
          </div>
          <!-- <h2>Trova alloggi su BoolBnB</h2>
          <label for="search" class="pb-3">Dove?</label>
          <input type="text" name="search" id="search" v-model="inputSearch" @input="autoComplete(inputSearch)">
          <ul v-if="inputSearch">
            <li class="list" v-for="element in foundedItems" @click="sendPosition(element.position)">
              {{ element.address.streetName || '' + ' '
                +
                element.address.municipality + ' ' +
                element.address.country
              }}
            </li>
          </ul>
          <div class="button-container"><button type="submit">
              <font-awesome-icon icon="magnifying-glass" class="icon" />
            </button></div>
          <button type="button" class="btn ps-4 icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <font-awesome-icon icon="sliders" />
          </button> -->
        </form>

        <div>
          <ul v-if="inputSearch">
            <li class="list" v-for="element in foundedItems" @click="sendPosition(element.position, element.address)">
              {{ element.address.streetName || '' + ' '
                +
                element.address.municipality + ' ' +
                element.address.country
              }}
            </li>
          </ul>
        </div>
      </div>
      <!-- /search bar -->

      <!-- Modal -->
      <ModalFilter />
      <!-- /Modal -->

      <div class="container">
        <div class="row justify-content-center">
          <CardImg v-for="apartment in apartments" :dataApartment="apartment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardImg from "../components/PageAdvancedSearch/CardImg.vue";
import ModalFilter from "../components/PageAdvancedSearch/ModalFilter.vue";
import Apartment from "../api/Apartment";
import { storeFilter } from "../store/storeFilter";
import Search from '../api/Search'


export default {
  name: "AdvancedSearch",
  components: {
    CardImg,
    ModalFilter,
  },
  data() {
    return {
      storeFilter,
      apartments: [],

      inputSearch: '',
      foundedItems: [],
      searchRadius: 20,
      position: null
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
      console.log("call");
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
      this.position = address.streetName || '' + ' '
        +
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
      this.position = address.streetName || '' + ' '
        +
        address.municipality + ' ' +
        address.country

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

.icon {
  font-size: 1.75rem;
  color: $custom-black;
}

ul {
  padding: 0;

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

.buttons-container {
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 50px;
  }
}
</style>
