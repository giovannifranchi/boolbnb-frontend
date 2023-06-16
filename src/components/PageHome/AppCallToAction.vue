<template>
    <div class="jumbotron container d-flex align-items-center justify-content-around mt-5 mb-5">
        <div class="image-container">
            <img src="../../assets/images/home-banner.svg" alt="">
        </div>
        <div class="box">
            <h2 class="mb-4">Affitta in sicurezza</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia similique modi cumque quam possimus
                voluptatibus earum quod veniam, porro consectetur aliquam officiis corporis ipsa deserunt ipsum labore
                fugiat. Id.</p>
            <div class="row justify-content-end">
                <div class="col-auto">
                    <button>Bottone a destra</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppCallToAction",
}
</script>

<style lang="scss" scoped>
@import '../../assets/partials/variables';


.image-container {
    width: 550px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
}

.box {
    max-width: 40%;

    h2 {
        font-weight: bolder;
        font-size: 40px;

    }

    p {
        font-size: 20px;
        text-align: justify;
    }

    button {
        background-color: $custom-red;
        padding: 14px 24px;
        color: $custom-white;
        font-size: 23px;
        font-weight: bold;
        border-radius: 100px;
        border: none;
    }
}
</style>