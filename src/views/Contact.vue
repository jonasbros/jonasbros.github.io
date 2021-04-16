<template>
  <section class="view__container contact__container">
    <NavBar />

    <img class="page__title contact__title" src="./../assets/CONTACT2.svg" alt="ABOUT" v-if="this.swOver(1024)">
    <img class="page__title contact__title" src="./../assets/CONTACT.svg" alt="ABOUT" v-else>



    <div>
      <form method="get" action="contact" class="contact__form" v-on:submit.prevent="send()">
          <input type="hidden" name="contact_number">
          <input class="form__input name" type="text" name="user_name" placeholder="Name" required>
          <input class="form__input email" type="email" name="user_email" placeholder="Email" required>
          <textarea class="form__input msg" name="message" placeholder="Message" v-on:keydown="initRecaptcha($event)" required></textarea>

          <input class="btn form__submit" :class="(sending || !recaptcha ? 'submit__disabled' : '')" type="submit" :value="sending ? 'Sending...' : 'Send'">

          <div 
            class="g-recaptcha"
            data-callback="callbackSucc"
            data-error-callback="callbackError"
            data-expired-callback="callbackExpired">     
          </div>
      </form>

      <div class="contact__social">
        <p>Connect with me on social media:</p>
        <a href="https://www.youtube.com/channel/UCp_mfqGTCb-vm0xxFbjz9Og" target="_blank"><img class="hover-is-red is-svg" src="./../assets/youtube.svg" alt="Youtube"></a>
        <a href="https://www.instagram.com/1jonasperez" target="_blank"><img class="hover-is-red is-svg" src="./../assets/instagram.svg" alt="Instagram"></a>
        <a href="https://github.com/jonasbros" target="_blank"><img class="hover-is-red is-svg" src="./../assets/github.svg" alt="Instagram"></a>
      </div>
    </div>

    <SentModal />
    <SiteFooter />
  </section>
</template>

<script>
import SiteFooter from './../components/SiteFooter.vue';
import SentModal from './../components/SentModal.vue';
import emailjs from 'emailjs-com';

export default {
    components: [
        SiteFooter,
        SentModal,
    ],
    data() {
      return {
        recaptcha: false,
        sending: false,
      }
    },
    created() {
      this.init();

      // console.log(window.onloadCallback);


      window.callbackSucc = (r) => {
        this.callbackSucc(r);
      };

      window.callbackError = (r) => {
        this.callbackError(r);
      };

      window.callbackExpired = (r) => {
        this.callbackExpired(r);
      };
    },
    mounted() {
      document.querySelector('.g-recaptcha').addEventListener('mouseenter', () => {
          let pointer = document.querySelector('.pointer');
          pointer.classList.add('hidden');
      });

      document.querySelector('.g-recaptcha').addEventListener('mouseleave', () => {
          let pointer = document.querySelector('.pointer');
          pointer.classList.remove('hidden');
      });
    },
    methods: {
      swOver(width) {
        return window.innerWidth >= width;
      },
      initRecaptcha(e) {
        let txtarea = e.target;
        if ( txtarea.value || (e.key == "Backspace" || e.key == "Delete") ) return;

        let el = document.querySelector('.g-recaptcha');
        window.grecaptcha.render(el, {
          sitekey: '6LctFuIZAAAAAE5jPonJhdQgaPw4D9hPwy64nv21',
          theme: 'light',
        });
      },
      resetRecaptcha() {
        let el = document.querySelector('.g-recaptcha');
        window.grecaptcha.reset(el);
      },
      init() {
        emailjs.init('user_d7olsciRBtoAMF6aldMN3');
      },
      send() {
        let form = document.querySelector('.contact__form');
        let formdata = new FormData(form);
        let params = {
          to_name: "PING! Studios",
          user_name: formdata.get('user_name'),
          user_email: formdata.get('user_email'),
          reply_to: formdata.get('user_email'),
          message: formdata.get('message'),
        }

        this.sending = true;      
        // gene;rate a five digit number for the contact_number variable
        form.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.send('gmail_service', 'template_gcalfn8', params)
            .then(() => {
                console.log('SUCCESS!');
                let submitBtn = document.querySelector('.form__submit');
                let sentModal = document.querySelector('.sent__modal');
                
                submitBtn.value = "Sent!";
                sentModal.classList.remove('closed');
                //close modal after 3s
                setTimeout( () => {
                  sentModal.classList.add('closed');
                }, 3000);
                //reset captcha
                this.resetRecaptcha();
                //clear inputs
                document.querySelectorAll('.form__input').forEach((el) => {
                  el.value = '';
                });
                //change button text 
                setTimeout( () => {   
                  submitBtn.value = "Send";        
                  this.sending = false;
                }, 2500 );
            }, (error) => {
                console.log('FAILED...', error);
                this.resetRecaptcha();
                this.sending = false;
            });
      },
      callbackSucc(r) {
        if(r) {
          this.recaptcha = true;
        }
      },
      callbackError(r) {
        if(r) {
          this.recaptcha = false;
        }
      },
      callbackExpired(r) {
        if(r) {
          this.recaptcha = false;
          this.resetRecaptcha();
        }
      }
    } 
}
</script>

<style lang="scss">
  .view__container.contact__container {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;

    // @media only screen and (min-width: 601px) {
    //   padding-top: 395.5px;
    // }

    @media only screen and (min-width: 768px) {
      max-width: 960px;
      overflow: visible;
      // padding-top: 455.5px;
    }

    @media only screen and (min-width: 1024px) {
      padding-top: 435.5px;
    }

    @media only screen and (min-width: 2560px) {
      max-width: 1060px;
    }

    @media only screen and (min-width: 3840px) {
      max-width: 1600px;
      padding-top: 585.5px;

    }

    //max-width
    @media only screen and (max-width: 1024px) {
        padding-top: 335.5px;
    }

    @media only screen and (max-width: 601px) {
        padding-top: 315.5px;
    }

    @media only screen and (max-width: 425px) {
        padding-top: 255.5px;
    }

    @media only screen and (max-width: 375px) {
        padding-top: 235.5px;
    }

  }

  .page__title.contact__title {
    width: 142%;
    transform: translate(-49%);

    @media only screen and (min-width: 3840px) {
      max-width: 1920px;
    }
  }

  .contact__form {
 
    .form__input {
      width: 100%;
      height: 47.2px;
      border-radius: 0;
      border: 2px solid black;
      padding: 10px;
      font-size: 16px;
      font-family: 'Poppins', Arial, sans-serif;

      @media only screen and (min-width: 411px) {
        font-size: 18px;
      }

      @media only screen and (min-width: 601px) {
        padding: 14px;
        height: 57.2px;
      }

      @media only screen and (min-width: 768px) {
        font-size: 22px;
        padding: 16px;
        height: 77.2px;
      }

      @media only screen and (min-width: 2560px) {
        font-size: 26px;
        padding: 18px;
        height: 97.2px;
      }

      @media only screen and (min-width: 3840px) {
        font-size: 36px;
        padding: 22px;
        height: 127.2px;
      }

      &:not(:last-of-type) {
        margin-bottom: 26px;
      }

      &:focus {
        transition: border 150ms linear;
        border-radius: 0;
        border: 2px solid #b20000;
        outline: none;
      }

      &.msg {
        resize: none;
        height: 153px;

        @media only screen and (min-width: 2560px) {
          height: 306px;
        }
      }
    }

    .form__submit.btn {
      @media only screen and (min-width: 411px) {
        font-size: 16px;
      }

      @media only screen and (min-width: 601px) {
        height: 45px;
        width: 100px;
      }

      @media only screen and (min-width: 768px) {
        font-size: 20px;
        height: 55px;
        width: 110px;
      }

      @media only screen and (min-width: 2560px) {
        font-size: 24px;
        height: 65px;
        width: 140px;
      }

      @media only screen and (min-width: 3840px) {
        font-size: 34px;
        height: 95px;
        width: 190px;
        margin-top: 18px;
      }

      &.submit__disabled {
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: none;
      }
    }

    .g-recaptcha {
      margin-bottom: 20px;
    }

    .transparent-div {
      width: 100%;
      height: 100%;
      position:relative;
      z-index: 1;
      background: pink;
    }
  }

  .contact__social {
    font-size: 12px;
    margin-bottom: 16px;

    @media only screen and (min-width: 411px) {
        font-size: 16px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media only screen and (min-width: 2560px) {
      font-size: 24px;
    }

    @media only screen and (min-width: 3840px) {
      font-size: 36px;
    }
    
    p {
      margin-bottom: 10px;
    }

    a {
      margin-right: 12px;
    }

    img {
      width: 24px;

      @media only screen and (min-width: 411px) {
        width: 28px;
      }

      @media only screen and (min-width: 601px) {
        width: 32px;
      }

      @media only screen and (min-width: 768px) {
        width: 38px;
      }

      @media only screen and (min-width: 2560px) {
        width: 46px;
      }

      @media only screen and (min-width: 3840px) {
        width: 66px;
      }
    }
  }
</style>
