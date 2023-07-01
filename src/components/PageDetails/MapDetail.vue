<script>

import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

export default ({
    props: {
        info: {
            type: Object,
            required: true,
        }
    },

    mounted(){
        if(true){
            let map = tt.map({
            key: import.meta.env.VITE_TOMTOM_API_KEY,
            container: "map",
            center: [this.info.longitude, this.info.latitude], // Change this to your desired initial position
            zoom: 18,
        });
        let marker = new tt.Marker().setLngLat([this.info.longitude, this.info.latitude]).addTo(map);
        }
    }
})

</script>

<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<style lang="scss" scoped>
#map {
    height: 400px;
    width: 600px;
}
</style>