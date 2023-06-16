<template>
    <div class="jumbotron container d-flex align-items-center justify-content-center mt-5 mb-5">
        <form class="form-container d-flex flex-column">
            <h2>Trova alloggi su BoolBnB</h2>
            <label for="search" class="pb-3">Dove?</label>
            <input type="text" name="search" id="search">
            <div class="button-container"><button type="submit">Cerca</button></div>

        </form>
        <div class="image-container">
            <img src="https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0"
                alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "AppJumbo",
}
</script>

<style lang="scss" scoped>
@import '../../assets/partials/variables';

.form-container {
    position: relative;
    transform: translateX(35%);
    padding: 30px;
    background-color: $custom-white;
    box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
    border-radius: 10px;

    input {
        border: none;
        font-size: 20px;
        border-radius: 10px;
        padding: 5px 20px;
        width: 400px;
    }

    .button-container {
        display: flex;
        justify-content: flex-end;

        button {
            border: none;
            width: 20%;
            margin-top: 15px;
            padding: 7px 0;
            font-size: 20px;
            font-weight: bolder;
            border-radius: 10px;
            color: $custom-white;
            background-color: $custom-red;
        }
    }


}

.image-container {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
}
</style>