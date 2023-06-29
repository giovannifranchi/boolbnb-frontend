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
    };
  },
  props: {
    dataArray: {
      type: Array,
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
  },
  watch: {
    dataArray: {
      handler(newValue) {
        if (newValue && newValue.length > 0) {
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
            tooltip.textContent = `Price: ${Element.price}`;
            tooltip.style.display = "none";

            markerElement.append(tooltip);

            markerElement.addEventListener("mouseenter", () => {
              // Show the tooltip
              tooltip.style.display = "block";
              this.storeFilter.activeApartment = Element.id;
            });

            markerElement.addEventListener("mouseleave", () => {
              // Hide the tooltip
              tooltip.style.display = "none";
              this.storeFilter.activeApartment = null;
            });

            // Add a click event listener to the marker's DOM element
            markerElement.addEventListener("click", () => {
              console.log("Marker clicked:", Element.id);
              this.storeFilter.activeApartment = Element.id;
            });

            marker.getElement().style.cursor = "pointer";
          });

          map.on("zoomend", () => {
            const zoomLevel = map.getZoom();
            this.storeFilter.range = this.calculateRadius(zoomLevel);
          });
        }
      },
      deep: true,
    },
  },

  mounted() {
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
      tooltip.textContent = `Price: ${Element.price}`;
      tooltip.style.display = "none";

      markerElement.append(tooltip);

      markerElement.addEventListener("mouseenter", () => {
        // Show the tooltip
        tooltip.style.display = "block";
      });

      markerElement.addEventListener("mouseleave", () => {
        // Hide the tooltip
        tooltip.style.display = "none";
      });

      // Add a click event listener to the marker's DOM element
      markerElement.addEventListener("click", () => {
        console.log("Marker clicked:", Element.id);
        this.storeFilter.activeApartment = Element.id;
      });

      marker.getElement().style.cursor = "pointer";
    });

    map.on("zoomend", () => {
      const zoomLevel = map.getZoom();
      this.storeFilter.range = this.calculateRadius(zoomLevel);
    });
  },
};
</script>

<style scoped>
#map {
  height: 350px;
  border-radius: 10px;
}

.marker-tooltip {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

@media (min-width: 767px) {
}

@media (min-width: 992px) {
}
</style>
