import { reactive } from "vue";

export const storeFilter = reactive({
    range: 20,
    minPrice: 500,
    maxPrice: 2000,
    selectedServices: [],
    beds: 0,
    rooms: 0,
    baths: 0,
})