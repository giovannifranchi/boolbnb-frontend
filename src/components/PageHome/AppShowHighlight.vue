<script>
import { mapActions, mapGetters } from "vuex";
import CardImg from "../PageAdvancedSearch/CardImg.vue";

export default {
  name: "AppShowHighlight",
  components: {
    CardImg
  },
  data() {
    return {
      isbusy: true
    };
  },
  async created() {
    await this.fetchHighlighted();
    this.isbusy = false;
  },

  computed: {
    ...mapGetters(["getHighlighted"]),
  },

  methods: {
    ...mapActions(["fetchHighlighted"]),

  }

};
</script>


<template>
  <div class="container">
    <div v-if="!isbusy">
      <h1>OUR CHOICES</h1>
      <div class="row">
        <div class="mb-4 col-lg-4 col-sm-12" v-for="highlighted in getHighlighted">
          <CardImg :dataApartment="highlighted" :highlight="true" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
@import "../../assets/partials/variables";

.container {
  background-color: white;
  /* border-radius: 10px; */
  /*   box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
 */
  padding: 10px 30px 20px 30px;
}

h1 {
  color: $custom-black;
  padding: 15px;
}
</style>
