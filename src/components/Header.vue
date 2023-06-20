<template>
    <header class="p-1">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">BoolBnB</div>
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
        font-size: 3.125rem;
        color: $custom-red;
        cursor: pointer;
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
