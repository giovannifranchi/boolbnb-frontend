<template>
    <div class="container" v-if="getUserInfo">
        <h1 class="text-center">Dashboard Page</h1>
        <h2 class="text-center">Welcome {{ getUserInfo.name.toUpperCase() }}</h2>
        <h3 class="text-center"> Your Email is {{ getUserInfo.email }}</h3>
        <!-- in this page we'll add stats chats -->
    </div>
</template>

<script>

import {  mapGetters } from 'vuex';

export default {
    name: "Dashboard",

    computed: {
        ...mapGetters(["getUserInfo"]),
    },


}
</script>

<style lang="scss" scoped></style>