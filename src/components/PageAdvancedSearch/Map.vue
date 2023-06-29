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
        calculateZoom(radius) {
            // Initial radius is 20 and initial zoom is 11
            const initialRadius = 20;
            const initialZoom = 11;

            // Calculate difference in radius from initial value
            let radiusDiff = radius - initialRadius;

            // Each change of 20 in radius corresponds to a change of 1 in zoom
            let zoomChange = Math.floor(radiusDiff / 20);

            // Subtract the zoomChange from initial zoom to make it inverse
            let zoom = initialZoom - zoomChange;

            // Ensure zoom does not go below 6 and above 16
            if (zoom < 6) {
                zoom = 6;
            } else if (zoom > 16) {
                zoom = 16;
            }

            return zoom;

        },
    },
    watch: {
        dataArray: {
            handler(newValue) {
                if (newValue && newValue.length > 0) {
                    let map = tt.map({
                        key: import.meta.env.VITE_TOMTOM_API_KEY,
                        container: "map",
                        center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
                        zoom: this.calculateZoom(this.storeFilter.range)
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

        let map = tt.map({
            key: import.meta.env.VITE_TOMTOM_API_KEY,
            container: "map",
            center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
            zoom: this.calculateZoom(this.storeFilter.range)
        });

        this.dataArray.forEach(Element => {
            new tt.Marker().setLngLat([Element.longitude, Element.latitude]).addTo(map)
        });


    }

}

</script>

<style scoped>
#map {
    height: 350px;
    border-radius: 10px;
}

@media (min-width: 767px) {}

@media (min-width: 992px) {}
</style>