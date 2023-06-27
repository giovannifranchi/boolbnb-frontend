<script>
import { onMounted, watch } from 'vue';
import leaflet from "leaflet";

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
</style>
