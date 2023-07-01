<template>
  <!-- card details -->
  <div class="container pt-3 " v-if="!isbusy">
    <BackBtn />
    <!-- <button class="btn-back my-3"> <a href="/advanced-search">Go Back</a></button> add link  -->
    <div class="title mb-4">
      <h1>{{ apartment.name }}</h1>
    </div>

    <div class="container-card ">
      <div class="row">
        <!-- main img -->
        <div class="main-img col-lg-10 col-sm-12">
          <img :src="activePic" alt="..." class=" w-100 square-image" id="thumbnail" />
        </div>
        <!-- others -->
        <div class="list-img col-lg-2 col-sm-12">
          <div class="row flex-lg-column gap-3 mt-3 mt-lg-0">
            <div class="col-sm-12" v-for="(images, index) in getAllImages">
              <img :src="images" alt="" class=" w-100 square-image"
                :class="{ active: index == indexOfActive ? true : false }" @click="selectedImage(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-section row mt-5">
      <div class="col-lg-6 col-sm-12 px-3">
        <h3>Main Info:</h3>
        <ul class="ps-0">
          <li>
            Published by: <strong>{{ apartment.user.name }}</strong>
          </li>
          <li>
            Location: <strong>{{ apartment.city }}</strong>
          </li>
          <li>
            Address: <strong>{{ apartment.address }}</strong>
          </li>
          <li>
            Price: <strong>{{ apartment.price }}€/night</strong>
          </li>

          <li>
            Square footage: <strong>{{ apartment.square_meters }} m²</strong>
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

        <h3 class="mb-3">Services:</h3>
        <ul class="d-flex p-0 gap-3 flex-wrap">
          <li v-for="(service, index) in apartment.services">
            <p class="mb-1"><font-awesome-icon aria-expanded="false" :icon="service.icon_url" class="icon" /> {{
              service.name }}</p>
          </li>
        </ul>

        <h3>Description:</h3>
        <p>{{ apartment.description }}</p>
      </div>
      <!-- message card -->
      <div class="col-lg-6 col-sm-12 px-4">
        <AppMessage :apartment_id="apartment.id" />
      </div>
    </div>
  </div>
      <!-- map -->
  <div class="container">
    <div class="col-lg-12 col-sm-12" v-if="apartment">
      <MapDetail :info="apartment" />
    </div>
  </div>
</template>

<script>
import Apartment from "../api/Apartment";
import MapDetail from "../components/PageDetails/MapDetail.vue";
import AppMessage from "../components/PageDetails/AppMessage.vue";
import { watchEffect } from "vue";
import moment from "moment";
import BackBtn from "../components/PageDetails/BackBtn.vue";

export default {
  name: "Apartment",
  components: {
    AppMessage,
    MapDetail
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
@import "../assets/partials/variables";

.square-image {
  aspect-ratio: 1/1;
  object-fit: cover;
}

.container-card {
  background-color: white;
  padding: 25px;
}

.main-img {
  max-height: 100;
}

.active {
  border: 2px solid rgb(46, 204, 113);
}

a {
  color: inherit;
  text-decoration: none;
}

.info-section {
  margin-bottom: 40px;
}

@media (max-width: 576px) {
  .container-card {
    background-color: transparent;
    padding: 0;
  }

  .title {
    padding: 0 10px;
  }

  .info-section {
    padding: 0 10px;
  }

  .main-img {
    display: none;
  }

  .list-img {
    padding: 0;
  }

  .active {
    border: none;
  }
}
</style>
