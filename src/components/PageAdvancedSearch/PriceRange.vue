<script>
import Slider from '@vueform/slider'

export default {
    components: { Slider },
    data: () => ({
        priceRange: [200, 300],
        merge: 10,
        format: {
            prefix: '$',
            decimals: 2,
        }
    })
}
</script>

<template>
    <div class="price-range">
        <h5 class="mb-5 mt-4">Fascia di prezzo</h5>
        <Slider :max="10000" v-model="priceRange" :merge="merge" :format="format" />
    </div>
</template>
