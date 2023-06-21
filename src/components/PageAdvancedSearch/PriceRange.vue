<script>
import Slider from '@vueform/slider';
export default {
    name: "PriceRage",
    components: { Slider },
    data: () => ({
      value: [20, 40]
    })
}
</script>

<template>
    <div class="price-range">
        <h5>Fascia di prezzo</h5>
        <Slider v-model="value" />
        <!--         <div class="range-slider  mt-3">
            <span class="range-selected"></span>
        </div>
        <div class="range-input">
            <input type="range" class="min" min="0" max="1000" value="300" step="10">
            <input type="range" class="max" min="0" max="1000" value="700" step="10">
        </div>
        <div class="range-price">
            <label for="min">Min €</label>
            <input type="number" name="min" value="300">
            <label for="max">Max €</label>
            <input type="number" name="max" value="700">
        </div> -->
    </div>
</template>

<style src="@vueform/slider/themes/default.css">
/* @import '../../assets/partials/variables';

.range-slider {
    height: 15px;
    position: relative;
    background-color: $custom-white;
    border-radius: 5px;
}

.range-selected {
    height: 100%;
    left: 30%;
    right: 30%;
    position: absolute;
    border-radius: 5px;
    background-color: $custom-blu;
}

.range-input {
    position: relative;
}

.range-input input {
    position: absolute;
    width: 100%;
    height: 15px;
    top: -15px;
    background: none;
    pointer-events: none;
}

.range-input input::-webkit-slider-thumb {
    height: 25px;
    width: 25px;
    border-radius: 50%;
      border: 3px solid $custom-black;
    background-color: $custom-blu;
    pointer-events: auto;
    -webkit-appearance: none;
}

.range-input input::-moz-range-thumb {
    height: 25px;
    width: 25px;
    border-radius: 50%;
      border: 3px solid $custom-black;
    background-color: $custom-blu;
    pointer-events: auto;
    -moz-appearance: none;
}

.range-price {
    margin: 30px 0;
    width: 100%;
    display: flex;
      justify-content: center;
    align-items: center;
}

.range-price label {
    margin-right: 5px;
}

.range-price input {
    width: 70px;
    padding: 5px;
    border: none;
}

.range-price input:first-of-type {
    margin-right: 15px;
} */

/* pice range */
</style>
