<script>
import Slider from '@vueform/slider';
export default {
    name: "PriceRange",
    components: {
        Slider,
    },
    data() {
        return {
            range: 20,
            format: {
                prefix: 'Km '
            }
        }
    }
}

</script>

<template>
    <div class="slidecontainer mb-3 mt-2">
        <h5 class="mb-5 mt-4"> Distanza</h5>
        <div>
            <Slider v-model="range" :format="format" />
        </div>
    </div>
</template>
