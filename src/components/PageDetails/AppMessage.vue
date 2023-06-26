<script>
export default {
    name: "AppMessage",
    data() {
    return {
      email: '',
      subject: '',
      message: '',
      sendBtnDisabled: true
    };
  },
  methods: {
    startApp() {
      this.sendBtnDisabled = true;
    },
    validateData() {
      this.validateLength();

      if (this.email !== '' && this.subject !== '' && this.message !== '') {
        const errors = document.querySelectorAll('.error');

        if (errors.length === 0) {
          this.sendBtnDisabled = false;
        }
      } else {
        this.sendBtnDisabled = true;
      }
    },
    resetForm() {
      this.email = '';
      this.subject = '';
      this.message = '';
    },
    sendEmail() {
      const spinnerGif = document.querySelector('#spinner');
      spinnerGif.style.display = 'block';

      const sent = document.createElement('img');
      sent.src = 'https://www.dropbox.com/s/0g5h91zyozcbenc/mail.gif?raw=1';
      sent.style.display = 'block';
      const link = `mailto:${this.email}&subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;

      setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(sent);
        setTimeout(() => {
          sent.remove();
          this.resetForm();
          this.sendBtnDisabled = true;
          window.location.href = link;
        }, 1500);
      }, 3000);
    },
    validateLength() {
      const inputs = this.$el.querySelectorAll('input[type="email"], input[type="text"], textarea');
      inputs.forEach(input => {
        if (input.value.length > 0) {
          input.style.borderBottomColor = 'green';
          input.classList.remove('error');
        } else {
          input.style.borderBottomColor = 'red';
          input.classList.add('error');
        }
      });
    }
  },
  mounted() {
    this.startApp();
  }
};

</script>

<template>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway:100,300" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <div class="row">
        <div class="form-container col-lg-6 col-sm-12 s8 offset-s2">
            <div id="content" class="m2">
                <header id="header">
                    Contatta il venditore
                </header>
                <!-- form -->
                <form id="send-mail" action="" class="col s10 offset-s1">
                    <div class="row">
                        <div class="input-field col s12">
                            <label for="email">Da:</label>
                            <input v-model="email" id="email" type="email">
                        </div>
                        <div class="input-field col s12">
                            <label for="subject">Oggetto:</label>
                            <input v-model="subject" id="subject" type="text">
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <label for="message">Messaggio: </label>
                            <textarea v-model="message" id="message" class="materialize-textarea"></textarea>
                        </div>
                    </div>

                    <div class="row" id="loaders">
                        <img id="spinner" src="https://www.dropbox.com/s/wfsji06m6jfe0yl/spinner.gif?raw=1" width="150">
                    </div>

                    <div class="row">
                        <div class="col s6">
                            <button id="send" class="btn waves-effect waves-light  pink darken-2" type="submit"
                                name="action">Invia
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <div class="col s6">
                            <button id="resetBtn" class="btn waves-effect waves-light light-blue darken-2"
                                type="submit">Annulla
                                <i class="material-icons right">delete</i>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- /form -->
            </div>
        </div>
    </div>
<!--     <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> -->
</template>
   


<style lang="scss" scoped>
@import '../../assets/partials/variables';

#content {
    background-color: $custom-black;
    margin-top: 40px;
    -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px, 0 5px 5px -3px;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}

#content::after {
    clear: both;
    display: block;
    content: '';
}

header {
    background-color: $custom-red;
    padding: 10px;
    text-align: center;
    color: white;
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
}

form {
    margin: 30px 0;
    color: $custom-white;
}
#email, #subject, #message{
    color: white;
}

#loaders {
    text-align: center;
}

#resetBtn {
    float: right;
}

#spinner {
    display: none;
}
</style>