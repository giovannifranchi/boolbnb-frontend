<template>
  <!-- <div class="container">
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

  <button class="btn-danger" @click="logout">logout</button> -->

  <!-- <button class="btn btn-info" @click="fetchApartments">get apartments</button>

  <div class="row" v-if="getApartments">
    <div class="col-3" v-for="apartment in getApartments">
      <img :src="apartment.thumb" alt="" class="img-fluid">
    </div>
  </div> -->

  <!-- <div v-if="first">
    <img :src="image.path" alt="" v-for="image in first.images">
  </div> -->

  <!-- <div class="row" v-if="getApartments">
    <div class="col-2" v-for="apartment in getApartments">
      <img :src="apartment.thumb" alt="immagine mancante" class="img-fluid">
    </div>
  </div> -->

  <div class="container">
    <form @submit.prevent="submit" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
        <input class="form-control" type="file" id="formFileMultiple" @change="setImages" multiple/>
        <input class="btn btn-primary" value="submit" type="submit">
      </div>
    </form>
    <div v-for="path in data.paths" :key="path">
      <img :src="path" alt="" v-if="path">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from 'axios';
import Vendor from '../api/Vendor';

export default {
  name: "TestApp",

  data() {
    return {
      data: {
        email: "",
        password: "",
        images: [],
        paths: [],
      },
    };
  },

  computed: {
    ...mapGetters(["getToken", "getUserApartments", "getApartments", "getHighlighted"]),

    first() {
      if (this.getHighlighted) {
        return this.getHighlighted[0];
      }
    },
  },

  methods: {
    ...mapActions(["login", "fetchUserApartments", "fetchApartments", "fetchHighlighted", "logout"]),

    setImages(e){
      this.data.images = [...e.target.files];
      console.log(this.data.images);
    },

    async submit(){
      let fd = new FormData();
      this.data.images.forEach((image, index) => {
        fd.append('images['+index+']', image);
      });
      // axios.post('http://127.0.0.1:8000/api/upload',fd)
      // .then((res)=> {
      //   console.log(res.data);
      //   this.data.paths = res.data.paths;
      // })
      // .catch((err)=> {
      //   console.log(err);
      // })
      const response = await Vendor.upload(fd);
      this.data.paths = response.paths;
    }
  },
};
</script>

<style lang="scss" scoped></style>
