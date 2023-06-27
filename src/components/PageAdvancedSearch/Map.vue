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
    name: "Map",

    data() {
        return {
            apartments: [],
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

    //   async created() {

    //   },

    async mounted() {
        const response = await this.fetchApartments();
        console.log(this.getApartments);
        if (this.getApartments.length > 0) {
            const apartmentSlice = this.getApartments.slice(0, 10);
            const apartments = apartmentSlice.map((apartment) => {
                return { lat: apartment.latitude, lng: apartment.longitude };
            })

            console.log(apartments);

            const map = tt.map({
                key: import.meta.env.VITE_TOMTOM_API_KEY,
                container: "map",
                center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
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
  

<!-- <script>
import { onMounted, watch } from 'vue';


export default {
    name: "Map",
    props: {
        dataArray: {
            type: Array
        }
    },
    data() {
        return {
            map: null  // Dichiarazione della variabile map come variabile di istanza
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            this.map = leaflet.map('map').setView([this.$route.query.latitude, this.$route.query.longitude], 13);
            // Aggiungi layer di tile
            leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        }
    },
    watch: {
        dataArray: {
            immediate: true, // Esegui il watcher subito all'inizio
            handler(newValue) {
                if (newValue && newValue.length > 0) {
                    // La prop dataArray è stata modificata e ha elementi
                    newValue.forEach(element => {
                        leaflet.marker([element.latitude, element.longitude]).addTo(this.map);
                    });
                }
            }
        }
    }
};
</script>

<template>
    <div id="map"></div>
</template>

<style scoped lang="scss"> #map {
     height: 300px;
     border-radius: 20px;
 }
</style> -->
