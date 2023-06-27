<template>
    <header class="p-0">
        <div class="container d-flex justify-content-between align-items-center">
            <router-link class="logo" to="/">
                <img class="logo-img" src="../assets/images/boolbnb-name-logo.png" alt="boolbnb">
            </router-link>
            <div class="dropdown">

                <font-awesome-icon data-bs-toggle="dropdown" aria-expanded="false" icon="fa-circle-user" class="icon" />

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",

}
</script>

<style lang="scss" scoped>
@import '../assets/partials/variables';

header {
    border-bottom: 0.125rem solid $custom-black;

    .logo {
        cursor: pointer;
        .logo-img{
            height: 3.75rem;
            margin: .625rem 0;
        }

    }

    .dropdown {
        cursor: pointer;
    }

    .icon {
        font-size: 3.4375rem;
        color: $custom-black;
    }

}
</style>
