<template>
  <div>
    <div id="map" style="height: 300px"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';


export default {
  name: "MapComponent",

  data() {
    return {
      apartments: [],
    };
  },

  computed: {
    ...mapGetters(["getApartments"]),

    getLongLat() {
      if (this.apartments.length > 0) {
        return this.apartments.map((apartment) => {
          return { lat: apartment.latitude, lng: apartment.longitude };
        });
      }
    },
  },

  methods: {
    ...mapActions(["fetchApartments"]),
  },

//   async created() {

//   },

  async mounted() {
    const response = await this.fetchApartments();
    console.log(this.getApartments);
    if(this.getApartments.length > 0){
        const apartmentSlice = this.getApartments.slice(0, 10);
        const apartments = apartmentSlice.map((apartment)=>{
        return {lat: apartment.latitude, lng: apartment.longitude};
    })

    console.log(apartments);
   
    const map = tt.map({
      key: import.meta.env.VITE_TOMTOM_API_KEY,
      container: "map",
      center: [13.411436, 52.523429], // Change this to your desired initial position
      zoom: 11,
    });

    // Array of your apartments with latitude and longitude

    // Add marker for each apartment
    apartments.forEach((apartment) => {
      new tt.Marker().setLngLat([apartment.lng, apartment.lat]).addTo(map);
    });
    }
  },
};
</script>

<style lang="scss" scoped></style>
