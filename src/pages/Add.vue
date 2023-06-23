<template>
  <div class="container">
    <h1 class="text-center">Add a new apartment</h1>
    <form @submit.prevent="send">
      <!-- apartment name -->
      <div class="mb-3">
        <label for="name" class="form-label">Apartment Name</label>
        <input type="text" class="form-control" id="name" name="name" v-model="apartmentName" />
      </div>
      <!-- apartment address -->
      <div class="mb-3">
        <label for="address-input" class="form-label">Address</label>
        <input type="text" class="form-control" id="address-input" v-model="inputSearch" @input="getOptions" />
        <ul class="list-unstyled" v-if="inputSearch">
          <li v-for="(option, index) in searchOptions" :key="index" @click="setOptions(option)">
            {{ formatAddress(option.address) }}
          </li>
        </ul>
      </div>
      <!-- square meters -->
      <div class="mb-3">
        <label for="square_meters" class="form-label">Square Meters</label>
        <input
          type="number"
          class="form-control"
          id="square_meters"
          name="square_meters"
          path="^(?!-)[0-9]+$"
          v-model="square_meters"
        />
      </div>
      <!-- bathrooms -->
      <div class="mb-3">
        <label for="bathrooms" class="form-label">Bathrooms Number</label>
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="bathrooms"
          name="bathrooms"
          path="^(?!-)[0-9]+$"
          v-model="bathrooms"
        />
      </div>
      <!-- rooms -->
      <div class="mb-3">
        <label for="rooms" class="form-label">Rooms Number</label>
        <input type="number" class="form-control" id="rooms" name="rooms" path="^(?!-)[0-9]+$" v-model="rooms" />
      </div>
      <!-- beds -->
      <div class="mb-3">
        <label for="beds" class="form-label">Beds Number</label>
        <input type="number" class="form-control" id="beds" name="beds" path="^(?!-)[0-9]+$" v-model="beds" />
      </div>
      <!-- price -->
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" name="price" path="^(?!-)[0-9]+$" v-model="price" />
      </div>
      <!-- discount -->
      <div class="mb-3">
        <label for="discount" class="form-label">Discount Value</label>
        <input
          type="number"
          class="form-control"
          id="discount"
          name="discount"
          path="^(?!-)[0-9]+$"
          v-model="discount"
        />
      </div>

      <!-- Services -->
      <div class="row" v-if="getServices">
        <div class="col-3" v-for="(service, index) in getServices" :key="index">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="services"
              @change="services.includes(service.id) ? removeServices(service.id) : addService(service.id)"
            />
            <label class="form-check-label" for="services">
              <span>{{ service.name }}</span>
              <font-awesome-icon aria-expanded="false" :icon="service.icon_url" class="icon" />
            </label>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Upload images</label>
        <input class="form-control" type="file" id="formFileMultiple" @change="onFileSelected" multiple />
      </div>

      <button class="btn btn-primary mt-5">Create</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Vendor from "../api/Vendor";
import Search from "../api/Search";

export default {
  name: "Add",

  data() {
    return {
      apartmentName: null,
      street: null,
      city: null,
      state: null,
      longitude: null,
      latitude: null,
      square_meters: null,
      bathrooms: null,
      beds: null,
      rooms: null,
      price: null,
      discount: null,
      services: [],
      images: [],

      //input handles for autocomplete
      inputSearch: null,
      searchOptions: [],
    };
  },

  computed: {
    ...mapGetters(["getServices", "getToken"]),
  },

  methods: {
    ...mapActions(["fetchServices"]),

    addService(id) {
      this.services.push(id);
    },

    removeServices(id) {
      this.services = this.services.filter((service) => service !== id);
    },

    async send() {
      const formData = new FormData();
      formData.append("name", this.apartmentName);
      formData.append("address", this.street);
      formData.append("city", this.city);
      formData.append("state", this.state);
      formData.append("longitude", this.longitude);
      formData.append("latitude", this.latitude);
      formData.append("square_meters", this.square_meters);
      formData.append("bathrooms", this.bathrooms);
      formData.append("beds", this.beds);
      formData.append("rooms", this.rooms);
      formData.append("price", this.price);
      formData.append("discount", this.discount);
      this.services.forEach((service, index) => {
        formData.append(`services[${index}]`, service);
      });
      this.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      try {
        const response = await Vendor.create(this.getToken, formData);
        console.log(response);
      } catch (error) {
        if (error.response.status === 401) {
            this.$router.push({name: 'home'});
      }
     }
    },

    async getOptions() {
      const response = await Search.autocomplete(this.inputSearch);
      this.searchOptions = response.results;
      console.log(this.searchOptions);
    },

    setOptions(option) {
      this.searchOptions = [];
      this.latitude = option.position.lat;
      this.longitude = option.position.lon;
      this.street = option.address.streetName;
      this.city = option.address.municipality;
      this.state = option.address.country;
      this.inputSearch = this.formatAddress(option.address);
      console.log(this.latitude, this.longitude, this.searchOptions);
    },

    formatAddress(address) {
      return `${address.streetName || ""} ${address.municipality || ""} ${address.country || ""}`.trim();
    },

    onFileSelected(event) {
      this.images = Array.from(event.target.files);
    },
  },

  async created() {
    await this.fetchServices();
  },
};
</script>

<style lang="scss" scoped></style>
