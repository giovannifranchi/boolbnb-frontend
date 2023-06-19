<template>
    <div class="container" v-if="!isbusy">
        <h1 class="text-center">Sponsorizza casa boolean</h1>
        <div v-for="plan in getPlans">
            <h4>{{plan.name}}</h4>
            <h2>{{plan.duration}} hours</h2>
            <h3>{{plan.price}} €</h3>
            <button>acquista</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Sponsor",

    data() {
    return {
      isbusy: true,
    };
  },

  async created() {
    await this.fetchPlans();
    this.isbusy = false;
  },

  computed: {
    ...mapGetters(["getPlans"]),
  },

  methods: {
    ...mapActions(["fetchPlans"]),
  }
}
</script>

<style lang="scss" scoped>
</style>