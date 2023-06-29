<template>
  <div :style="{
  backgroundImage: 'url(' + cities[randomInt(0, cities.length - 1)] + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }" class="background-img d-flex align-items-center mb-5">
<div class="container">
  <form class="form-container d-flex flex-column" @submit.prevent="sendPositionButton()">
        <h2>Find where to stay</h2>
        <label for="search">Book unique accommodations, homes, and more on with us!</label>
        <div class="input-container row align-item-center pb-2 ">
          <div class="col-lg-10 col-sm-12 pt-3">          
            <input
          placeholder="Search here"
          type="text"
          name="search"
          id="search"
          v-model="inputSearch"
          @input="autoComplete(inputSearch)"/>

        <ul v-if="inputSearch">
          <li class="list" v-for="element in foundedItems" @click="sendPosition(element.position)">
            {{ element.address.streetName || "" + " " + element.address.municipality + " " + element.address.country }}
          </li>
        </ul>
      </div>
      <div class="col-lg-2 col-sm-12 pt-3">
        <div class="button-container">
          <button type="submit">Search</button>
        </div>
      </div>

        </div>

      </form>
</div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Search from "../../api/Search";

export default {
  name: "AppJumbo",
  data() {
    return {
      inputSearch: "",
      foundedItems: [],
      defaultRadius: 20,
      cities: ['src/assets/images/rome.webp', 'src/assets/images/bern.jpg', 'src/assets/images/copenaghen.jpg', 'src/assets/images/dublin.jpg', 'src/assets/images/prague.jpg', 'src/assets/images/lisbon.webp', 'src/assets/images/lisbon.webp', 'src/assets/images/tallinn.jpg' ]
    };
  },
  computed: {
    ...mapGetters(["getHighlighted"]),

    randomHighlight() {
      if (this.getHighlighted) {
        return this.getHighlighted[this.randomInt(0, this.getHighlighted.length - 1)];
      }
    },
  },
  methods: {
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    async autoComplete(inputSearch) {
      const response = await Search.autocomplete(inputSearch);
      this.foundedItems = response.results;
    },
    sendPosition(object) {
      this.$router.push({
        name: "AdvancedSearch",
        query: {
          latitude: object.lat,
          longitude: object.lon,
          radius: this.defaultRadius,
        },
      });
    },
    sendPositionButton() {
      this.$router.push({
        name: "AdvancedSearch",
        query: {
          latitude: this.foundedItems[0].position.lat,
          longitude: this.foundedItems[0].position.lon,
          radius: this.defaultRadius,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/partials/variables";

.background-img{
  height: 500px;
}

.form-container {
/*   position: relative;
  transform: translateX(5%); */
  padding:10px 30px;
  background-color: white;
  box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
/*   border-radius: 10px; */

  ul {
    padding: 0;

    li {
      margin: 4px 0;
      cursor: pointer;

      a {
        color: $custom-black;
        text-decoration: none;
      }
    }
  }
  .input-container{
    align-items: center;
    input{
      width: 100%;
    }
  }
  input,
  li {
    
    border: 1px solid $custom-black;
    font-size: 20px;
/*     border-radius: 5px; */
    padding: 5px 20px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.144);
  }

  .button-container {
    display: flex;

    button {
      border: none;
      width: 100%;
      padding: 7px 10px;
      font-size: 20px;
      font-weight: bolder;
/*       border-radius: 10px; */
      color: white;
      background-color: $custom-green;
    }
  }
}

.image-container {
  width: 1000px;
  height: 600px;
  transform: translateX(-5%);
  z-index: -1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 992px) {
  .jumbotron {
    padding: 0;
  }
  .image-container {
    display: none;
  }
  .form-container {
    width: 100%;
    input,
    li {
      width: 100%;
    }
  }
}
</style>
