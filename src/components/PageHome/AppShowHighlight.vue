<script>
import { mapActions, mapGetters } from "vuex";
import CardImgHigh from "../PageHome/CardImgHigh.vue";

export default {
  name: "AppShowHighlight",
  components: {
    CardImgHigh
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
      <h1>Our best suggestions</h1>
      <div class="row">
        <CardImgHigh />
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
@import "../../assets/partials/variables";

.container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
  padding: 10px 30px;
}

  h1 {
    color: $custom-black;
    padding: 15px;
  }

</style>
