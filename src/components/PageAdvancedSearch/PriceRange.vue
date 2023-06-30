<script>
import Slider from '@vueform/slider'
import { storeFilter } from '../../store/storeFilter';

export default {
    components: { Slider },
    data: () => ({
        storeFilter,
        priceRange: [storeFilter.lowerPrice, storeFilter.biggestPrice],
        merge: 10,
        format: {
            prefix: '$',
            decimals: 2,
        }
    }),

    watch: {
        priceRange(newValue) {
            this.setChange();
        }
    },

    methods: {
        setChange() {
            
            this.storeFilter.minPrice = this.priceRange[0];
            this.storeFilter.maxPrice = this.priceRange[1];
            
        }
    },

}
</script>

<template>
    <div class="price-range" v-if="storeFilter.lowerPrice && storeFilter.biggestPrice">
        <h5 class="mb-5 mt-4">Fascia di prezzo</h5>
        <Slider :min="this.storeFilter.lowerPrice" :max="this.storeFilter.biggestPrice" v-model="priceRange" :merge="merge"
            :format="format" />
    </div>
</template>
