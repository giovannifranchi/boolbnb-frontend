<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';


export default {
    name: "Map",

    data() {
        return {
            apartments: [],
            map: null
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
            immediate: true, // Esegui il watcher subito all'inizio
            handler(newValue) {
                if (newValue && newValue.length > 0) {
                    newValue.forEach(Element => {
                        // new tt.Marker().setLngLat([Element.longitude, Element.latitude]).addTo(map)
                    })
                }
            }
        }
    },

    async mounted() {
        const response = await this.fetchApartments();
        console.log(this.getApartments);
        if (this.getApartments.length > 0) {
            const apartmentSlice = this.getApartments.slice(0, 10);
            const apartments = apartmentSlice.map((apartment) => {
                return { lat: apartment.latitude, lng: apartment.longitude };
            })

            console.log(apartments);

            this.map = tt.map({
                key: import.meta.env.VITE_TOMTOM_API_KEY,
                container: "map",
                center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
                zoom: 11,
            });
        }
    },

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