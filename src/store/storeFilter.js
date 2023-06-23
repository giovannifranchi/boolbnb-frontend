import { reactive } from "vue";

export const storeFilter = reactive({
    biggestPrice: 0,
    lowerPrice: 0,
    range: 20,
    minPrice: null,
    maxPrice: null,
    selectedServices: [],
    beds: 0,
    rooms: 0,
    baths: 0,
})