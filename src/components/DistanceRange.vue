<script>
export default {
    name: "PriceRange",

}
</script>
<template>
    <div class="slidecontainer mb-3 mt-2" >
        <h5> Distanza</h5>
        <input type="range" min="1" max="100" value="20" class="slider" id="myRange">
        <div class="dist-container mt-3">
            mappa città

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @import '../assets/partials/variables';
    .dist-container{
        height: 300px;
        width: 100%;
        background-color: $custom-blu;
    }
   .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: $custom-white;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: $custom-blu;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: $custom-blu;
        cursor: pointer;
    }

    /* /distance range */

</style>