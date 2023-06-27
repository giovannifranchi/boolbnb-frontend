<template>
    <div class="jumbotron container row align-items-center justify-content-around">
        <div class="image-container col-lg-6 col-sm-12" >
            <img src="../../assets/images/home-banner.svg" alt="">
        </div>
        <div class="box col-lg-6 col-sm-12">
            <h2 class="mb-4">Affitta in sicurezza</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia similique modi cumque quam possimus
                voluptatibus earum quod veniam, porro consectetur aliquam officiis corporis ipsa deserunt ipsum labore
                fugiat.</p>
            <div class="button-container">
                    <button><a class="dropdown-item" href="http://127.0.0.1:8000/register">Rent your porperties with us</a></button>
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
.container{
    background-color: white;
    box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
    border-radius: 10px;
    margin: 50px auto;
}

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
/*     max-width: 40%;
 */
    h2 {
        font-weight: bolder;
        font-size: 40px;

    }

    p {
        font-size: 20px;
        text-align: justify;
    }

    button {
        background-color: $custom-green;
        width: 100%;
        padding: 14px 24px;
        color: $custom-white;
        font-size: 23px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>