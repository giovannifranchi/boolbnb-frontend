<script>
import Slider from '@vueform/slider'
import { storeFilter } from '../../store/storeFilter';

export default {
    components: { Slider },
    data: () => ({
        priceRange: [500, 2000],
        storeFilter,
        merge: 10,
        format: {
            prefix: '$',
            decimals: 2,
        }
    }),

    watch: {
        priceRange(newValue){
            this.setChange();
            console.log(this.storeFilter.minPrice, 'min');
            console.log(this.storeFilter.maxPrice, 'max');
        }
    },

    methods: {
        setChange(){
            this.storeFilter.minPrice = this.priceRange[0];
            this.storeFilter.maxPrice = this.priceRange[1];
        }
    },


}
</script>

<template>
    <div class="price-range">
        <h5 class="mb-5 mt-4">Fascia di prezzo</h5>
        <Slider :max="10000" v-model="priceRange" :merge="merge" :format="format" />
    </div>
</template>
