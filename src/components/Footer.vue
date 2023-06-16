<template>
    <footer>
        <div class="container d-flex justify-content-between align-items-center p-5">
            <div class="footer-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="social d-flex">
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
        font-size: 1.25rem;
    }

    .social {
        a {
            padding: 8px;
            color: $custom-white;
            font-size: 37px;

            &:hover {
                color: $custom-red;
            }
        }

    }
}
</style>