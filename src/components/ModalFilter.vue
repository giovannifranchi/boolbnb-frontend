<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "ModalFilter",
    data() {
    return {
      isbusy: true
    };
    
},
async created() {
    await this.fetchServices();
    this.isbusy = false;
  },

computed: {
    ...mapGetters(["getServices"]),
  },
  methods: {
    ...mapActions(["fetchServices"])
}

}
</script>

<template>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Ricerca avanzata</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5>Numero Stanze</h5>
                        <div>
                            <ul class="px-0 pt-2">
                                <li class="filter-select">
                                    <button class="btn active">Qualsiasi</button>
                                    <button class="btn">1</button>
                                    <button class="btn">2</button>
                                    <button class="btn">3</button>
                                    <button class="btn">4</button>
                                    <button class="btn">5</button>
                                    <button class="btn">6+</button>
                                </li>
                            </ul>
                        </div>
                        <h5>Numero Bagni</h5>
                        <div>
                            <ul class="px-0 pt-2">
                                <li class="filter-select">
                                    <button class="btn ">Qualsiasi</button>
                                    <button class="btn">1</button>
                                    <button class="btn active">2</button>
                                    <button class="btn">3</button>
                                    <button class="btn">4</button>
                                    <button class="btn">5</button>
                                    <button class="btn">6+</button>
                                </li>
                            </ul>
                        </div>
                        <div v-if="!isbusy">
                        <h5>Servizi</h5>
                        <div class="form-check" v-for="service in getServices">                                
                               {{service.name}}
                        </div>
                     </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-negative" data-bs-dismiss="modal">Annulla</button>
                        <button type="button" class="btn btn-positive">Applica</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.modal-content{
    @import '../assets/partials/variables';
    border: solid 3px $custom-blu;
    border-radius: 1.5625rem;
    .filter-select{
        button{
            border: solid 1px $custom-black;
            border-radius: 1.5625rem ;
            margin-right: 10px;
            padding: 3px 15px;
        }
        .active{
                background-color: $custom-blu;
                color: $custom-black;
                font-weight: 600;
            }
    }
    .btn-positive{
        background-color: $custom-blu;
    }
    .btn-negative{
        background-color: $custom-red;
    }
}
</style>