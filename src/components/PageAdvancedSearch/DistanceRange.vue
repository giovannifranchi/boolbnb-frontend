<script>
import { storeFilter } from '../../store/storeFilter';
import Slider from '@vueform/slider';
export default {
    name: "PriceRange",
    components: {
        Slider,
    },
    data() {
        return {
            storeFilter,
            format: {
                prefix: 'Km ',
                decimals: 0,
            }
        }
    },
}

</script>

<template>
    <div class="slidecontainer mb-3 mt-2">
        <h5 class="mb-5 mt-4 mx-4"> Distanza</h5>
        <div class=" mx-4">
            <Slider :min="5" :max="200" v-model="storeFilter.range" :format="format" />
        </div>
    </div>
</template>
