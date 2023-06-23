<template>
  <div class="container">
    <h1 class="text-center">Login Page</h1>

    <form @submit.prevent="enter">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email"/>
      </div>
      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" v-model="password"/>
        </div>
      </div>
      <button class="btn btn-primary" >Login</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';


export default {
  name: "Login",

  data(){
    return {
        email: '',
        password: '',
    }
  },

  computed: {
    ...mapGetters(['getToken']),
  },

  methods: {
    ...mapActions(['login']),

    async enter(){
        const response = await this.login({email: this.email, password: this.password});
        if(this.getToken) this.$router.push({name: 'apartments'});
    }
  }
};
</script>

<style lang="scss" scoped></style>
