<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { storeFilter } from "../../store/storeFilter";

export default {
  name: "Map",

  data() {
    return {
      apartments: [],
      storeFilter,
      markers: [],
    };
  },
  props: {
    dataArray: {
      type: Array,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    ...mapGetters(["getApartments", "getStoreFilter"]),
    storeFilter() {
      return this.getStoreFilter;
    },
    getLongLat() {
      if (this.apartments.length > 0) {
        return this.apartments.map((apartment) => {
          return { lat: apartment.latitude, lng: apartment.longitude };
        });
      }
    },
    getHovered() {
      return storeFilter.hoveredApartment;
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
    calculateRadius(zoom) {
      // Initial radius is 20 and initial zoom is 11
      const initialRadius = 20;
      const initialZoom = 11;

      // Calculate difference in zoom from initial value
      let zoomDiff = initialZoom - zoom;

      // Each change of 1 in zoom corresponds to a change of 20 in radius
      let radiusChange = zoomDiff * 20;

      // Add the radiusChange to initial radius to make it inverse
      let radius = initialRadius + radiusChange;

      // Ensure radius does not go below 2 and above 200
      if (radius < 2) {
        radius = 2;
      } else if (radius > 200) {
        radius = 200;
      }

      return radius;
    },

    createMap() {
      let map = tt.map({
        key: import.meta.env.VITE_TOMTOM_API_KEY,
        container: "map",
        center: [this.$route.query.longitude, this.$route.query.latitude], // Change this to your desired initial position
        zoom: this.calculateZoom(this.storeFilter.range),
      });

      this.dataArray.forEach((Element) => {
        let marker = new tt.Marker().setLngLat([Element.longitude, Element.latitude]).addTo(map);

        let markerElement = marker.getElement();

        let tooltip = document.createElement("div");
        tooltip.className = "marker-tooltip";
        tooltip.textContent = `${Element.price}$`;
        tooltip.style.display = "none";
        tooltip.style.background = 'black';
        tooltip.style.padding = '10px 5px';
        tooltip.style.fontSize = '18px'
        tooltip.style.color = 'white'
        tooltip.style.borderRadius = '200px'
        tooltip.style.zIndex = '1000'
        tooltip.style.position = 'relative'


        markerElement.append(tooltip);

        markerElement.addEventListener("mouseenter", () => {

          storeFilter.activeApartment = Element.id;
          // Show the tooltip
          tooltip.style.display = "inline-block";

        });


        markerElement.addEventListener("mouseleave", () => {
          storeFilter.activeApartment = null;
          tooltip.style.display = "none";
        });

        // Add a click event listener to the marker's DOM element
        markerElement.addEventListener("click", () => {

          this.storeFilter.activeApartment = Element.id;
          this.$router.push({ name: "apartment", params: { id: Element.id, slug: Element.slug } });
        });

        marker.getElement().style.cursor = "pointer";

        this.markers.push({ id: Element.id, marker: marker, tooltip: tooltip });
      });

      map.on("zoomend", () => {
        const zoomLevel = map.getZoom();
        this.storeFilter.range = this.calculateRadius(zoomLevel);
      });
    },
  },
  watch: {
    dataArray: {
      handler(newValue) {
        if (newValue && newValue.length > 0) {
          this.createMap();
        }
      },
      deep: true,
    },

    isOpen(newValue) {
      this.createMap();
    },


    getHovered(newValue, oldValue) {
      this.markers.forEach(({ id, marker, tooltip }) => {
        let markerElement = marker.getElement();
        if (id === newValue) {
          markerElement.style.background = 'red';
          markerElement.style.borderRadius = '5px';
          tooltip.style.display = 'inline-block'
        } else if (id === oldValue) {
          markerElement.style.background = '';
          tooltip.style.display = 'none'
        }
      });
    },
  },

  mounted() {},
};
</script>

<style scoped>
#map {
  height: 350px;
  border-radius: 10px;
}


@media (min-width: 767px) {
}

@media (min-width: 992px) {
}
</style>
