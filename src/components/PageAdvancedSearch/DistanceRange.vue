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
                prefix: 'Km '
            }
        }
    },
    methods: {
        loadFilter() {

        }
    }

}

</script>

<template>
    <div class="slidecontainer mb-3 mt-2">
        <h5 class="mb-5 mt-4"> Distanza</h5>
        <div>
            <Slider :max="200" v-model="storeFilter.range" :format="format" @change="loadFilter()" />
        </div>
    </div>
</template>
