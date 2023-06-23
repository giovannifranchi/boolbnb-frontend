<template>
  <div class="container">
    <h1 class="text-center">Register Page</h1>

    <form @submit.prevent="enter">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="email" v-model="name" />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" v-model="password" />
        </div>
      </div>
      <button class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Register",

  data(){ //most likely it will be required to add also password confirmation field
    return {
        name: '',
        email: '',
        password: '',
    }
  },

  computed: {
    ...mapGetters(['getToken']),
  },

  methods: {
    ...mapActions(['register']),

    async enter(){
        const response = await this.register({name: this.name, email: this.email, password: this.password});
        if(this.getToken) this.$router.push({name: 'dashboard'});
    }
  },


};
</script>

<style lang="scss" scoped></style>
