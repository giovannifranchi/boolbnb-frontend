<template>
  <div>
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
        <input type="text" class="form-control" id="address-input" />
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
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vendor from "../api/Vendor";

export default {
  name: "Add",

  data() {
    return {
      apartmentName: null,
      longitude: null,
      latitude: null,
      square_meters: null,
      bathrooms: null,
      beds: null,
      rooms: null,
      price: null,
      discount: null,
      services: [],
    };
  },

  computed: {
    ...mapGetters(["getServices", "getToken"]),
  },

  methods: {
    addService(id) {
      this.services.push(id);
    },

    removeServices(id) {
      this.services = this.services.filter((service) => service !== id);
    },

    async send(){
        const response = await Vendor.create(this.getToken, {
            name: this.apartmentName,
            longitude: this.longitude,
            latitude: this.latitude,
            square_meters: this.square_meters,
            bathrooms: this.bathrooms,
            beds: this.beds,
            rooms: this.rooms,
            price: this.price,
            discount: this.discount,
            services: this.services,
        });
        console.log(response);
    }
  },
};
</script>

<style lang="scss" scoped></style>
