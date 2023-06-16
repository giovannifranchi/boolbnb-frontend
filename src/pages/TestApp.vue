<template>
  <div class="container">
    <form @submit.prevent="login(data)">

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="data.email"
      />
    </div>

    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" v-model="data.password"/>
      </div>
    </div>
    <button type="submit" class="btn btn-danger" >Registrati</button>
    </form>

    <h1 class="mt-5">{{ getToken ? getToken : 'no token yet' }}</h1>

    <button class="btn btn-info mt-5" @click="fetchUserApartments">see apartments</button>

    <p>{{ getUserApartments ? getUserApartments : 'no apts yes' }}</p>

    <button class="btn btn-info mt-5" @click="fetchApartments">see All apartments</button>
    <p>{{ getApartments ? getApartments : 'no apt all yet' }}</p>


    <button class="btn btn-info mt-5" @click="fetchHighlighted">see highlighted</button>
    <p>{{ getHighlighted ? getHighlighted : 'no highlighted yet' }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "TestApp",

  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getToken", "getUserApartments", "getApartments", "getHighlighted"]),
  },

  methods: {
    ...mapActions(["login", "fetchUserApartments", "fetchApartments", "fetchHighlighted"]),
  },
};
</script>

<style lang="scss" scoped></style>
