<template>
    <footer>
        <div class="container">
            <div class="row justify-content-between align-items-center py-4">
                <div class="footer-text col-lg-6 col-md-12 ">
                    <p class="mb-1">BoolBnb 2023 | Classe 89</p>
                    <p  class="mb-1"> Created with  
                        <font-awesome-icon icon="fa-face-sad-cry" />
                         by Filippo Bonafini, Giovanni Franchi, Cosimo Petrarca, Giulia Tognali & Riccardo Turella
                        </p>  
                </div>
                <div  class="social col col-lg-6 col-md-12">
                    <div class="social-icons d-flex">
                        <a href="#">
                            <Instagram />
                        </a>
                        <a href="#">
                            <Tiktok />
                        </a>
                        <a href="#">
                            <Twitter />
                        </a>
                        <a href="#">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Tiktok from './icons/tiktok.vue';
import Instagram from './icons/instagram.vue';
import Twitter from './icons/twitter.vue';
import Facebook from './icons/facebook.vue';

export default {
    name: "Footer",
    components: { Tiktok, Instagram, Twitter, Facebook }
}
</script>

<style lang="scss" scoped>
@import '../assets/partials/variables';

footer {
    background-color: $custom-black;
    color: $custom-white;

    .footer-text {
        font-size: 1rem;
    }

    .social-icons {
        a {
            padding: 8px;
            color: $custom-white;
            font-size: 37px;

            &:hover {
                color: $custom-green;
            }
        }

    }
    @media(min-width:992px){
        .footer-text{
            text-align: start;
        }
    .social-icons{
        justify-content: end;
    }
}
@media(max-width:992px){
    .footer-text{
            text-align: center;
        }
    .social-icons{
        justify-content: center;
    }
}
}
</style>