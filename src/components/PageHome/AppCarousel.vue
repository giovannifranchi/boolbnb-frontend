<!-- <template>
    <div class="carousel-row">
        <div class="container">
            <h1>Grandi occasioni</h1>
            <div class="carousel">
                CAROSELLO DI IMMAGINI
            </div>
        </div>
    </div>
</template> -->
  
<!-- <script>
export default {
    name: "AppCarousel",
    data() {
        return {
            slides: [
                { id: 1, title: "Slide 1", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 2, title: "Slide 2", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 3, title: "Slide 3", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 4, title: "Slide 4", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 5, title: "Slide 5", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 6, title: "Slide 6", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 7, title: "Slide 7", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
            ],
        };
    }
};
</script>
  
<style scoped lang="scss">
@import '../../assets/partials/variables';

.carousel-row {
    background-color: $custom-black;

    h1 {
        color: $custom-white;
        padding: 10px 0;
    }

    .carousel {
        color: white;
        height: 280px;
    }
}
</style> -->
  



<template>
    <div class="carousel-row">
        <div class="container">
            <h1>Grandi occasioni</h1>
            <div class="carousel">
                <div class="carousel-slides" :style="carouselStyle">
                    <div v-for="slide in slides" :key="slide.id" class="carousel-slide">
                        <img :src="slide.image" :alt="slide.title">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "AppCarousel",
    data() {
        return {
            slides: [
                { id: 1, title: "Slide 1", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 2, title: "Slide 2", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 3, title: "Slide 3", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 4, title: "Slide 4", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 5, title: "Slide 5", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 6, title: "Slide 6", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                { id: 7, title: "Slide 7", image: "https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0" },
                // Aggiungi altre immagini secondo le tue esigenze
            ],
            currentIndex: 0,
            visibleSlidesCount: 7,
            slideWidth: 100,
            slideInterval: null
        };
    },
    computed: {
        visibleSlides() {
            const lastIndex = this.slides.length - 1;
            const start = this.currentIndex;
            const end = start + this.visibleSlidesCount;
            if (end <= lastIndex) {
                return this.slides.slice(start, end);
            } else {
                const slides = [...this.slides.slice(start), ...this.slides.slice(0, end - lastIndex - 1)];
                return slides.length > this.visibleSlidesCount ? slides.slice(0, this.visibleSlidesCount) : slides;
            }
        },
        carouselStyle() {
            return {
                width: `${this.slideWidth * this.visibleSlidesCount}%`,
                transform: `translateX(-${this.slideWidth * this.currentIndex}%)`
            };
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        this.stopCarousel();
    },
    methods: {
        startCarousel() {
            this.slideInterval = setInterval(() => {
                this.nextSlide();
            }, 3000); // Intervallo di 3 secondi tra le slide (puoi modificare il valore secondo le tue preferenze)
        },
        stopCarousel() {
            clearInterval(this.slideInterval);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }
    }
};
</script>
  
<style scoped lang="scss">
@import '../../assets/partials/variables';

.carousel-row {
    background-color: $custom-black;

    h1 {
        color: $custom-white;
        padding: 10px 0;
    }
}

.carousel {
    overflow: hidden;
    position: relative;
}

.carousel-slides {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-slide {
    flex: 0 0 calc(100% / 7);
    max-width: calc(100% / 7);
}

.carousel-slide img {
    width: 100%;
    height: 100%;
}
</style>