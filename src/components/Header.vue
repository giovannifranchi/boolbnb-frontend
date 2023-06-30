<template>
    <header class="p-0">
        <div class="container d-flex justify-content-between align-items-center">
            <router-link class="logo" to="/">
                <img class="logo-img" src="../assets/images/boolbnb-name-logo.png" alt="boolbnb">
                <img class="logo-img-small " src="../assets/images/boolbnb-logo.png" alt="boolbnb-logo">
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
    height: 80px;
    border-bottom: 1px solid $custom-black;

    .logo {
        cursor: pointer;
        .logo-img,
        .logo-img-small{
            height: 3.75rem;
            margin: .625rem 0;
        }

    }

    .dropdown {
        cursor: pointer;
    }

    .icon {
        font-size: 3.4375rem;
        color: $custom-green;
    }
    @media (min-width:576px){
        .logo-img-small{
            display: none;
        }
    }
    @media (max-width: 576px) {
        .logo-img{
            display:none;
        }
        .logo-img-small{
            display: block;
        }
    }
}
</style>
