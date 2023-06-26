<script>
import Message from "../../api/Message";

export default {
  name: "AppMessage",

  data() {
    return {
      email: "",
      name: "",
      lastname: "",
      text: "",
      isSuccessfull: false,
    };
  },

  props: {
    apartment_id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    async submit() {
      if (this.name.trim() !== "" && this.lastname.trim() !== "" && this.text.trim() !== "") {
        const response = await Message.post({
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          text: this.text,
          apartment_id: this.apartment_id,
        });
        if(response.message){
          this.isSuccessfull = true;
          this.name = '';
          this.lastname = '',
          this.email = '',
          this.text = ''
        }
      }
    },

    reset(){
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.text = '';
    }
  },
};
</script>

<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Raleway:100,300" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

  <div class="row">
    <div class="form-container col-lg-6 col-sm-12 s8 offset-s2">
      <div id="content" class="m2">
        <header id="header">Contatta il venditore</header>
        <!-- form -->
        <form id="send-mail" class="col s10 offset-s1" @submit.prevent="submit">
          <div class="row">
            <div class="input-field col s12">
              <label for="email">Da:</label>
              <input v-model="email" id="email" type="email" />
            </div>
            <div class="input-field col s12">
              <label for="subject">Name:</label>
              <input v-model="name" id="subject" type="text" />
            </div>
            <div class="input-field col s12">
              <label for="subject">Lastame:</label>
              <input v-model="lastname" id="subject" type="text" />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <label for="message">Message: </label>
              <textarea v-model="text" id="message" class="materialize-textarea"></textarea>
            </div>
          </div>

          <div class="row" id="loaders">
            <img :class="isSuccessfull ? 'ms-active' : 'd-none'" src="https://www.dropbox.com/s/0g5h91zyozcbenc/mail.gif?raw=1" width="150" />
          </div>

          <div class="row">
            <div class="col s6">
              <button id="send" class="btn waves-effect waves-light pink darken-2" type="submit" name="action">
                Invia
                <i class="material-icons right">send</i>
              </button>
            </div>
            <div class="col s6">
              <button id="resetBtn" class="btn waves-effect waves-light light-blue darken-2" type="button" @click="reset">
                Annulla
                <i class="material-icons right">delete</i>
              </button>
            </div>
          </div>
        </form>
        <!-- /form -->
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "../../assets/partials/variables";

#content {
  background-color: $custom-black;
  margin-top: 40px;
  -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px, 0 5px 5px -3px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}

#content::after {
  clear: both;
  display: block;
  content: "";
}

form {
  margin: 30px 0;
  color: $custom-white;
}
#email,
#subject,
#message {
  color: white;
}

#loaders {
  text-align: center;
}

#resetBtn {
  float: right;
}

.ms-active {
  display: block;
}

#spinner {
  display: none;
}
</style>
