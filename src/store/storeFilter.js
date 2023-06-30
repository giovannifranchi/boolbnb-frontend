import { reactive } from "vue";

export const storeFilter = reactive({
    biggestPrice: null,
    lowerPrice: null,
    range: 20,
    minPrice: null,
    maxPrice: null,
    selectedServices: [],
    beds: 0,
    rooms: 0,
    baths: 0,
    activeApartment: null,
    priceRange: []
})