<template>
    <button @:click="goBack" class="btn-back my-3"> 
        Go Back
    </button> 
</template>

<script>
export default {
    name: "BackBtn",

    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../../assets/partials/variables";

.btn-back{
		margin-top: 20px;
		border: 2px solid $custom-green;
		padding:10px 20px;
		color:$custom-green;
		border-radius: 25px;
		font-weight: 600;
	}
	.btn-back:hover{
		/* scale: 1.05; */
		transition: transform 0.2s ease-in-out;
		background-color: $custom-green;
		color:white;	
	}
</style>