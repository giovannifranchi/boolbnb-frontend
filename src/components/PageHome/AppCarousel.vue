<template>
    <div class="carousel-row" v-if="getHighlighted">
        <h1 class="container">Grandi occasioni</h1>
        <div class="carousel d-flex gap-5" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
            <div class="image-container" v-for="highlighted in getHighlighted">
                <img :src="highlighted.thumb" alt="img">
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex";

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
            ],
            isPaused: false,
            isReverse: false,
            scrollInterval: null,
        };
    },
    async created(){
        await this.fetchHighlighted();
    },

    mounted() {
        this.$nextTick(() => {
            this.startHorizontalScrolling();
        });
    },

    computed: {
        ...mapGetters(['getHighlighted']),
    },

    methods: {
        ...mapActions(["fetchHighlighted"]),

        startHorizontalScrolling() {
            const container = document.querySelector('.carousel');
            const contentWidth = container.scrollWidth - container.clientWidth;

            this.scrollInterval = setInterval(() => {
                container.scrollLeft += 1;
                if (container.scrollLeft >= contentWidth) {
                    clearInterval(this.scrollInterval);
                    this.startReverseHorizontalScrolling();
                }
            }, 10);
        },
        startReverseHorizontalScrolling() {
            const container = document.querySelector('.carousel');
            const contentWidth = container.scrollWidth - container.clientWidth;

            this.scrollInterval = setInterval(() => {
                container.scrollLeft -= 1;
                if (container.scrollLeft <= 0) {
                    clearInterval(this.scrollInterval);
                    this.startHorizontalScrolling();
                }
            }, 10);
        },
        pauseScroll() {
            clearInterval(this.scrollInterval);
        },
        resumeScroll() {
            if (!this.isReverse) {
                this.startHorizontalScrolling();
            } else {
                this.startReverseHorizontalScrolling();
            }
        },
    },
};
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
  



