<template>
  <div class="container p-3 bg-white" v-if="!isbusy">
    <h1 class="d-flex justify-content-center">{{ apartment.name }}</h1>
    <div class="my-subtitle">
      <h4>Published by: {{ apartment.user.name }}</h4>
    </div>

    <div>
      <div class="row">
        <div class="col-12 col-lg-10">
          <img :src="activePic" alt="..." class="rounded w-100 h-100" id="thumbnail" />
        </div>
        <div class="col-12 col-lg-2">
          <div class="row flex-lg-column gap-3 mt-3 mt-lg-0">
            <div class="col" v-for="(images, index) in getAllImages">
              <img
                :src="images"
                alt=""
                class="rounded w-100 h-100"
                :class="{ active: index == indexOfActive ? true : false }"
                @click="selectedImage(index)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 col-lg-6">
        <h3>Main Info</h3>
        <ul class="ps-0">
          <li>
            Price: <strong>{{ apartment.price }}€</strong>
          </li>
          <li>
            M²: <strong>{{ apartment.square_meters }} mq</strong>
          </li>
          <li>
            Rooms: <strong>{{ apartment.rooms }}</strong>
          </li>
          <li>
            Bathrooms: <strong>{{ apartment.bathrooms }}</strong>
          </li>

          <li>
            For Rent From: <strong>{{ convertDateFormat(apartment.create_at) }}</strong>
          </li>
        </ul>

        <h3 class="mb-3">Services</h3>
        <ul class="d-flex gap-3 flex-wrap">
          <li v-for="(service, index) in apartment.services" class="">
            <p><font-awesome-icon aria-expanded="false" :icon="service.icon_url" class="icon" /> {{ service.name }}</p>
          </li>
        </ul>

        <h3>Description</h3>
        <p>{{ apartment.description }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <AppMessage :apartment_id="apartment.id" />
      </div>
    </div>

  </div>
</template>

<script>
import Apartment from "../api/Apartment";
import Service from "../api/Service";
import AppMessage from "../components/PageDetails/AppMessage.vue";
import { watchEffect } from "vue";
import moment from "moment";

export default {
  name: "Apartment",
  components: {
    AppMessage,
  },

  data() {
    return {
      isbusy: true,
      apartment: null,

      services: {
        type: Object,
      },
      images: [],
      activePic: null,
      indexOfActive: 0,
      timeStamp: null,
    };
  },
  async created() {
    const response = await Apartment.getOne(this.$route.params.id);
    // response.error ? this.$router.push({name:'notFound'}) : ()=>{this.apartment=response;this.isbusy = false;}
    this.apartment = response;
    this.isbusy = false;
    if (this.apartment) {
      this.images.push(this.apartment.thumb);
      this.apartment.images.forEach((image) => {
        this.images.push(image.path);
      });
    }
  },
  mounted() {
    watchEffect(() => {
      if (this.images.length > 0) {
        this.activePic = this.images[0];
      }
    });
  },

  computed: {
    getAllImages() {
      if (this.apartment) {
        const allImages = [this.apartment.thumb, ...this.apartment.images.map((image) => image.path)];
        return allImages;
      }
      return [];
    },
  },

  methods: {
    selectedImage(index) {
      this.activePic = this.getAllImages[index];
      this.indexOfActive = index;
      console.log(this.activePic);
    },

    convertDateFormat(date) {
      return moment(date).format("DD-MM-YYYY");
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  border: 2px solid rgb(46, 204, 113);
}

</style>
