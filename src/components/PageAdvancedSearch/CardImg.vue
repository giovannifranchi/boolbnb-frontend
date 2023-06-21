<template>
    <div class="card col-lg-4 col-md-4 col-sm-12 mb-5">
        <!-- carosello -->
        <div :id="'carouselIndicators_' + uniqueId" class="carousel slide">
            <ul class="carousel-indicators">
                <li v-for="(image, index) in getAllImages" :key="index" :data-bs-target="'#carouselIndicators_' + uniqueId"
                    :data-bs-slide-to="index" :class="{ active: index === activeIndex }"></li>
            </ul>
            <div class="carousel-inner">
                <div :class="['carousel-item', { active: index === activeIndex }]" v-for="(image, index) in getAllImages"
                    :key="index">
                    <img :src="image" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselIndicators_' + uniqueId"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselIndicators_' + uniqueId"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- /carosello -->
        <div class="info-card">
            <h5 class="card-title pt-2">{{ dataApartment.address }}, {{ dataApartment.city }}</h5>
            <p>{{ dataApartment.name }}</p>
            <p>{{ dataApartment.price }}$ /Notte</p>

        </div>
    </div>
</template>

<script>
export default {
    name: "CardImg",
    props: {
        dataApartment: {
            type: Object,
        },
    },
    data() {
        return {
            activeIndex: 0,
        };
    },
    computed: {
        uniqueId() {
            return "cardImg_" + Math.random().toString(36).substr(2, 9);
        },
        getAllImages() {
            if (this.dataApartment) {
                const images = [this.dataApartment.thumb];
                this.dataApartment.images.forEach((image) => {
                    images.push(image.path)
                })

                return images;

            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    background-color: transparent;
    border: none;

    .carousel-inner {
        border-radius: 10px;

        .carousel-item {
            img {
                height: 200px; // Altezza fissa desiderata
                max-width: 100%; // Imposta l'ampiezza massima come 100% del contenitore
                object-fit: cover; // Ridimensiona l'immagine in modo da coprire l'area specificata senza distorcere l'aspetto
            }
        }
    }

    .info-card {
        p {
            margin: 0.3125rem 0;
        }
    }
}
</style>
