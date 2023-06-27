<template>
    <div class="jumbotron container d-flex align-items-center justify-content-center mt-5 mb-5">
        <form class="form-container d-flex flex-column" @submit.prevent="sendPositionButton()">

            <h2>Find where to go</h2>
            <label for="search" class="pb-3">Book unique accommodations, homes, and more on with us!</label>
            <input placeholder="Search here" type="text" name="search" id="search" v-model="inputSearch" @input="autoComplete(inputSearch)">
            <ul v-if="inputSearch">
                <li class="list" v-for="element in foundedItems" @click="sendPosition(element.position)">
                    {{ element.address.streetName || '' + ' '
                        +
                        element.address.municipality + ' ' +
                        element.address.country
                    }}
                </li>
            </ul>
            <div class="button-container"><button type="submit">Search</button></div>

        </form>
        <div class="image-container" v-if="randomHighlight">
            <img :src="randomHighlight.thumb" alt="">
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapGetters } from 'vuex';
import Search from '../../api/Search'

export default {
    name: "AppJumbo",
    data() {
        return {
            inputSearch: '',
            foundedItems: [],
            defaultRadius: 20
        }
    },
    computed: {
        ...mapGetters(['getHighlighted']),

        randomHighlight() {
            if (this.getHighlighted) {
                return this.getHighlighted[this.randomInt(0, this.getHighlighted.length - 1)];
            }
        }
    },
    methods: {
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        async autoComplete(inputSearch) {
            const response = await Search.autocomplete(inputSearch)
            this.foundedItems = response.results
        },
        sendPosition(object) {
            this.$router.push({
                name: 'AdvancedSearch',
                query: {
                    latitude: object.lat,
                    longitude: object.lon,
                    radius: this.defaultRadius
                }
            });
        },
        sendPositionButton() {
            this.$router.push({
                name: 'AdvancedSearch',
                query: {
                    latitude: this.foundedItems[0].position.lat,
                    longitude: this.foundedItems[0].position.lon,
                    radius: this.defaultRadius
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/partials/variables';

.form-container {
    position: relative;
 /*    transform: translateX(25%); */
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 20px 16px rgba(17, 17, 26, 0.18);
    border-radius: 10px;

    ul {
        padding: 0;

        li {
            margin: 4px 0;
            cursor: pointer;

            a {
                color: $custom-black;
                text-decoration: none;

            }
        }
    }

    input,
    li {
        border: 1px solid $custom-black;
        font-size: 20px;
        border-radius: 5px;
        padding: 5px 20px;
        width: 400px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.144);
    }

    .button-container {
        display: flex;

        button {
            border: none;
            width: 100%;
            margin-top: 25px;
            padding: 10px 0;
            font-size: 20px;
            font-weight: bolder;
            border-radius: 10px;
            color: $custom-white;
            background-color:$custom-green;
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