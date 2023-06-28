<template>
  <div class="row">
    <div class="card col col-lg-3 col-sm-12" v-for="highlighted in getHighlighted">
      <router-link
      :to="{name:'apartment', params: { slug: highlighted.slug, id: highlighted.id } }"
      class="text-decoration-none text-reset">
      <div class="image-container">
        <div class="logo">
          <img class="miniature" src="../../../src/assets/images/boolbnb-logo.png" alt="">
        </div>
        <img :src="highlighted.thumb" alt="img" />

      </div>
      <div class="info-card">
        <h5 class="card-title pt-2">{{ highlighted.name }}</h5>
        <p>{{ highlighted.address }}, {{ highlighted.city }}</p>
        <p><strong>{{ highlighted.price }} €</strong> /Notte</p>
      </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardImgHigh",
  props: {
    dataApartment: {
      type: Object,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  async created() {
    await this.fetchHighlighted();
    this.isbusy = false;
  },

  methods: {
    ...mapActions(["fetchHighlighted"]),

  },
  computed: {
    ...mapGetters(["getHighlighted"]),
  }
};
</script>


<style lang="scss" scoped>
.card {
  border:none;
    .image-container {
    position: relative;
    height: 290px;
    width: 290px;
    padding: 20px 0;
    border-radius: 20px;

    &:hover {
      transform: scale(1.06);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}

.logo {
  position: absolute;
  width: 35px;
  right: 15px;
  top: 35px;
  &:hover {
      transform: scale(1.06);
    }

}

.info-card {
  p {
    margin: 0.3125rem 0;
  }
}
</style>
