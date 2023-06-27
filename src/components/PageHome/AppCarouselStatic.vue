<template>
  <div class="container">
    <div class="wrapper" v-if="!isbusy">
      <h1>Our best suggestions</h1>
      <div class="row">
      <div class="carousel d-flex gap-5" data-target="carousel">

        <div class="image-container col-lg-6 col-sm-6" v-for="highlighted in getHighlighted">
          <img :src="highlighted.thumb" alt="img" />
          <div class="logo">
            <font-awesome-icon icon=" fa-paper-plane" />
          </div>
          <div class="text-image ps-0 pt-3">
            <p>{{ highlighted.name }}</p>
            <p>{{ highlighted.price }}/night</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppCarousel",
  data() {
    return {
      isbusy: true,
      isPaused: false,
      isReverse: false,
      scrollInterval: null,
    };
  },
  async created() {
    await this.fetchHighlighted();
    this.isbusy = false;
  },

  mounted() {
    this.$nextTick(() => {
      this.startHorizontalScrolling();
    });
  },

  computed: {
    ...mapGetters(["getHighlighted"]),
  },

  methods: {
    ...mapActions(["fetchHighlighted"]),

    /*     startHorizontalScrolling() {
          if (this.getHighlighted) {
            const container = document.querySelector(".carousel");
            const contentWidth = container.scrollWidth - container.clientWidth;
    
            this.scrollInterval = setInterval(() => {
              container.scrollLeft += 1;
              if (container.scrollLeft >= contentWidth) {
                clearInterval(this.scrollInterval);
                this.startReverseHorizontalScrolling();
              }
            }, 10);
          }
        },
        startReverseHorizontalScrolling() {
          const container = document.querySelector(".carousel");
          const contentWidth = container.scrollWidth - container.clientWidth;
    
          this.scrollInterval = setInterval(() => {
            container.scrollLeft -= 1;
            if (container.scrollLeft <= 0) {
              clearInterval(this.scrollInterval);
              this.startHorizontalScrolling();
            }
          }, 10);
        },
        pauseScroll() {
          clearInterval(this.scrollInterval);
        },
        resumeScroll() {
          if (!this.isReverse) {
            this.startHorizontalScrolling();
          } else {
            this.startReverseHorizontalScrolling();
          }
        }, */
  },

  
};
</script>

<style scoped lang="scss">
@import "../../assets/partials/variables";
.container{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
  padding: 10px 30px;
}
.wrapper {
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  
  
}

.carousel{
  
  height: 100%;
  position: relative;
  padding: 15px 0;

  

  &::before {
    content: "";
    z-index: 1;
    /*     width: 300px;
    height: 100%; */
    position: absolute;
  }

  &::after {
    content: "";
    z-index: 1;
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  h1 {
    color: $custom-black;
    padding: 15px;
  }

  .carousel {
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none;
    /* Rimuove la barra di scorrimento in Internet Explorer e Microsoft Edge */
    scrollbar-width: none;
    /* Rimuove la barra di scorrimento in Firefox */
  }

  /* Nasconde la barra di scorrimento in Chrome, Safari e Opera */
  .carousel::-webkit-scrollbar {
    display: none;
  }

  .image-container {
    position: relative;
    height: 300px;
    width: 300px;
    padding: 20px 0;
    border-radius: 20px;
    &:hover {
        /*         border: 2px solid $custom-red; */
        transform: scale(1.06);
      }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;

      }
    }
    .logo{
      position: absolute;
      right: 15px;
      top: 35px;
      color: $custom-green;
      border: 2px solid $custom-green;
      padding: 5px 10px;
      border-radius: 20px;

  }
}
</style>
