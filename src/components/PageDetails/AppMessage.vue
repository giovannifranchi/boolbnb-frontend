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
        if (response.message) {
          this.isSuccessfull = true;
          const succesStop = setTimeout(() => {
            this.isSuccessfull = false
          }, 4000);
          this.name = '';
          this.lastname = '',
            this.email = '',
            this.text = ''
        }
      }
    },

    reset() {
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.text = '';
    }
  },

};
</script>

<template>

  <div class="row">
    <div class="form-container col">
      <div id="content" class="m2">
        <header id="header">
          <h3>Contact the seller</h3>
        </header>

        <!-- form -->
        <form id="send-mail" class="col-12 s10 " @submit.prevent="submit">
          <div class="row">

            <div class="input-field col-12">
              <input v-model="name" id="subject" type="text" />
              <label class="ms-2" for="subject">Name:</label>

            </div>
            <div class="input-field col-12">
              <input v-model="lastname" id="subject" type="text" />
              <label class="ms-2" for="subject">Lastname:</label>

            </div>
          </div>
          <div class="input-field col-12">
            <input v-model="email" id="email" type="email" />
            <label for="email">Email:</label>

          </div>
          <div class="row">




            <div class="input-field col-12 pb-5">
              <textarea v-model="text" id="message" class="materialize-textarea"></textarea>
              <label class="ms-3" for="message">Message: </label>

            </div>
          </div>

          <div class="row" id="loaders">
            <img :class="isSuccessfull ? 'ms-active' : 'd-none'"
              src="https://www.dropbox.com/s/0g5h91zyozcbenc/mail.gif?raw=1" width="50" />
          </div>

          <div class="row">
            <div class="col s6">

              <button id="send" class="btn btn-send" type="submit" name="action">

                Invia
                <font-awesome-icon icon="fa-paper-plane" />
              </button>
            </div>
            <div class="col s6">
              <button id="resetBtn" class="btn btn-danger waves-effect waves-light light-blue darken-2" type="button"
                @click="reset">
                Annulla
                <font-awesome-icon icon="fa-trash" />
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


.form-container {
  background: white;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
/*   border-radius: 10px; */
  padding: 40px;
}

#header {
  padding: 10px 0;
  margin-bottom: 20px;
}

.form-container h3 {
  padding: 0;
  margin: 0;
  text-align: center;
}

.form-container .input-field {
  position: relative;
}

.form-container .input-field input,
.form-container .input-field textarea {
  width: 100%;

  padding-top: 20px;
  font-size: 15px;
  color: black;

  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
}

.form-container .input-field label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 20px;
  color: black;
  pointer-events: none;
  transition: .7s;
}

.form-container .input-field input:focus~label,
.form-container .input-field input:valid~label {
  top: -20px;
  left: 0;
  color: $custom-green;
  font-size: 15px;
}

.form-container .input-field textarea:focus~label,
.form-container .input-field textarea:valid~label {
  top: -20px;
  left: 0;
  color: $custom-green;
  font-size: 15px;
}

.btn-send {
  background-color: $custom-green;
  color: white;
}

#loaders {
  text-align: center;
}

#resetBtn {
  float: right;
  color: white;
}

.ms-active {
  display: block;
}
</style>
