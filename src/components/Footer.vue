<template>
    <footer>
        <div class="container">
            <div class="row justify-content-between align-items-center py-4">
                <div class="col-lg-6 footer-text">
                    BoolBnb 2023 - Created by
                </div>
                <div  class="col-lg-6">


                    <div class="social d-flex justify-content-end">
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

    .social {
        a {
            padding: 8px;
            color: $custom-white;
            font-size: 37px;

            &:hover {
                color: $custom-green;
            }
        }

    }
}
</style>