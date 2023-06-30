<template>
  <div class="card">
    <!-- carosello -->
    <router-link :to="{ name: 'apartment', params: { slug: dataApartment.slug, id: dataApartment.id } }"
      class="text-decoration-none text-reset" @click="addView(dataApartment.id)">
      <div :id="'carouselIndicators_' + uniqueId" class="carousel slide">


        <div v-if="highlight" class="logo d-felx justify-content-center">
          <img class="miniature" src="../../../src/assets/images/boolbnb-logo.png" alt="">
        </div>

        <ul class="carousel-indicators">
          <li v-for="(image, index) in getAllImages" :key="index" :data-bs-target="'#carouselIndicators_' + uniqueId"
            :data-bs-slide-to="index" :class="{ active: index === activeIndex }"></li>
        </ul>
        <div class="row carousel-inner">

          <div :class="['carousel-item', { active: index === activeIndex }]" v-for="(image, index) in getAllImages"
            :key="index">
            <img :src="image" class=" d-block square-image" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselIndicators_' + uniqueId"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselIndicators_' + uniqueId"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>
      <!-- /carosello -->
      <div class="info-card pt-3 mx-3">
        <h4 class="card-title pt-2">{{ dataApartment.name }}</h4>
        <p>{{ dataApartment.address }}, {{ dataApartment.city }}</p>
        <p><strong>{{ dataApartment.price }} €</strong> /Notte</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import View from '../../api/View';

export default {
  name: "CardImg",
  props: {
    dataApartment: {
      type: Object,
    },
    highlight: {
      type: Boolean,
      /*       required: true, */
      default: false
    }
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    uniqueId() {
      return "cardImg_" + Math.random().toString(36).substr(2, 9);
    },
    getAllImages() {
      if (this.dataApartment) {
        const images = [this.dataApartment.thumb];
        this.dataApartment.images.forEach((image) => {
          images.push(image.path);
        });

        return images;
      }
    },
  },

  methods: {
    async addView(id) {
      const response = await View.post(id);
      console.log(response);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: transparent;
  border: none;

  .carousel-inner {
    margin: 0;
    padding: 0;
    border-radius: 10px;

    .carousel-item {
      img {
        border-radius: 13px;
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover; // Ridimensiona l'immagine in modo da coprire l'area specificata senza distorcere l'aspetto
      }
    }
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.563);
    border-radius: 25px;

    &:hover {
      transform: scale(1.06);
    }

    .miniature {
      width: 40px;
      margin: 4px;
    }
  }

  .info-card {
    p {
      margin: 0.3125rem 0;
      font-size: 19px;
    }
  }
}
</style>
