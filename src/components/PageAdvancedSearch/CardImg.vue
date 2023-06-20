<script>

export default {
    name: "CardImg",
}
</script>

<template>
    <div class="card">
        <!-- carosello -->
        <div id="carouselIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://picsum.photos/seed/picsum/400/400" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/seed/picsum/400/400" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/seed/picsum/400/400" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- /carosello -->
        <div class="info-card">
            <h5 class="card-title pt-2">Luogo appartamento</h5>
            <p>Nome appartamento</p>
            <p>Prezzo a notte</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc((100% - 40px ) / 4);
    background-color: transparent;
    border: none;

    .carousel-inner {
        border-radius: 10px;
    }
    .info-card{
        p{
            margin: .3125rem 0;
        }
    }
}
</style>