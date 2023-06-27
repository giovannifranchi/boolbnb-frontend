<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { storeFilter } from "../../store/storeFilter";


export default {
    name: "Map",

    data() {
        return {
            apartments: [],
            storeFilter,

        };
    },
    props: {
        dataArray: {
            type: Array
        }
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

    watch: {
        dataArray: {
            handler(newValue) {
                if (newValue && newValue.length > 0) {
                    let map =  tt.map({
                key: import.meta.env.VITE_TOMTOM_API_KEY,
                container: "map",
                center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
                zoom: Math.floor(20 / this.storeFilter.range ),
            });

            this.dataArray.forEach(Element => {
                         new tt.Marker().setLngLat([Element.longitude, Element.latitude]).addTo(map)
                    })
                }
            },
            deep: true
        }
    },

   mounted() {

            let map =  tt.map({
                key: import.meta.env.VITE_TOMTOM_API_KEY,
                container: "map",
                center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
                zoom: 11,
            });

            this.dataArray.forEach(Element => {
                         new tt.Marker().setLngLat([Element.longitude, Element.latitude]).addTo(map)
                    })
        }
    
    ,

};
</script>

<style scoped>
#map{
  height: 20vh;
  margin-bottom: 50px;
}

@media (min-width: 767px) {
    #map {
        height: 50vh;
       
    }
}

@media (min-width: 992px) {
    #map {
        height: 70vh;
    
    }
}

</style>