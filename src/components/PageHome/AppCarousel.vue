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
            ]
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
            if (container) {
                // Calcola la larghezza totale del contenuto
                const contentWidth = container.scrollWidth - container.clientWidth;
                // Imposta un intervallo per scorrere automaticamente
                const scrollInterval = setInterval(() => {
                    container.scrollLeft += 1; // Puoi regolare la velocità modificando il valore qui
                    // Verifica se è stato raggiunto il termine del contenuto
                    if (container.scrollLeft >= contentWidth) {
                        clearInterval(scrollInterval);
                        // Avvia il ritorno indietro
                        this.startReverseHorizontalScrolling(container, contentWidth);
                    }
                }, 10); // Puoi regolare l'intervallo di tempo per il movimento qui
            }
        },
        startReverseHorizontalScrolling(container, contentWidth) {
            // Imposta un intervallo per tornare indietro
            const reverseScrollInterval = setInterval(() => {
                container.scrollLeft -= 1; // Puoi regolare la velocità modificando il valore qui
                // Verifica se è stato raggiunto l'inizio del contenuto
                if (container.scrollLeft === 0) {
                    clearInterval(reverseScrollInterval);
                    // Riprendi lo scorrimento in avanti
                    this.startHorizontalScrolling();
                }
            }, 10); // Puoi regolare l'intervallo di tempo per il movimento qui
        }
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
        padding: 10px 0;
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
            border-radius: 20px;
        }
    }
}
</style> 
  



