<template>
    <div class="carousel-row">

        <h1 class="container">Grandi occasioni</h1>
        <div class="carousel d-flex gap-5">
            <div class="image-container" v-for="image in images">
                <img :src="image" alt="img">
            </div>
        </div>

    </div>
</template> 
<script>

export default {
    name: "AppCarousel",
    data() {
        return {
            images: [
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.3620c20c43c551aba303663ef93f81bf?rik=S5tp7TDhtnufBw&riu=http%3a%2f%2ftheaddressmagazine.com%2fwp-content%2fuploads%2f2014%2f03%2fmiami-waterfront-apartments-6.jpg&ehk=WIOoavrZsCmHrdbMXd7Yq5r7WAoaYBM832rGJ4cNS5Y%3d&risl=&pid=ImgRaw&r=0',
            ],
            isPaused: false
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.startHorizontalScrolling();
        });
    },
    methods: {
        startHorizontalScrolling() {
            const container = document.querySelector('.carousel');
            const imageContainers = document.querySelector('.carousel-row');
            if (container) {
                const contentWidth = container.scrollWidth - container.clientWidth;
                let scrollInterval;

                const startScroll = () => {
                    scrollInterval = setInterval(() => {
                        container.scrollLeft += 1;
                        if (container.scrollLeft >= contentWidth) {
                            clearInterval(scrollInterval);
                            this.startReverseHorizontalScrolling(container, contentWidth);
                        }
                    }, 10);
                };

                const pauseScroll = () => {
                    clearInterval(scrollInterval);
                };


                imageContainers.addEventListener('mouseenter', pauseScroll);
                imageContainers.addEventListener('mouseleave', startScroll);


                startScroll();
            }
        },
        startReverseHorizontalScrolling(container) {
            const reverseScrollInterval = setInterval(() => {
                container.scrollLeft -= 1;
                if (container.scrollLeft === 0) {
                    clearInterval(reverseScrollInterval);
                    this.startHorizontalScrolling();
                }
            }, 10);

            container.forEach((imageContainer) => {
                imageContainer.removeEventListener('mouseenter', this.pauseScroll);
                imageContainer.removeEventListener('mouseleave', this.startScroll);
            });
        },
    }

}
</script>
  
<style scoped lang="scss">
@import '../../assets/partials/variables';

.carousel-row {
    background-color: $custom-black;
    position: relative;

    &::before {
        content: '';
        z-index: 1;
        width: 300px;
        height: 100%;
        position: absolute;
        background: rgb(37, 42, 52);
        background: linear-gradient(270deg, rgba(37, 42, 52, 0) 78%, rgba(37, 42, 52, 1) 94%);
    }

    &::after {
        content: '';
        z-index: 1;
        width: 300px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: rgb(37, 42, 52);
        background: linear-gradient(90deg, rgba(37, 42, 52, 0) 78%, rgba(37, 42, 52, 1) 94%);
    }

    h1 {
        color: $custom-white;
        padding-top: 15px;
    }

    .carousel {
        overflow-x: auto;
        white-space: nowrap;
        -ms-overflow-style: none;
        /* Rimuove la barra di scorrimento in Internet Explorer e Microsoft Edge */
        scrollbar-width: none;
        /* Rimuove la barra di scorrimento in Firefox */
    }

    /* Nasconde la barra di scorrimento in Chrome, Safari e Opera */
    .carousel::-webkit-scrollbar {
        display: none;
    }

    .image-container {
        height: 300px;
        min-width: 410px;
        padding: 20px 0;
        border-radius: 20px;




        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;

            &:hover {
                border: 2px solid $custom-red;
                transform: scale(1.06);
                cursor: pointer;
            }
        }
    }
}
</style> 
  



