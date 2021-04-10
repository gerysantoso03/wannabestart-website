<template>
  <div class="modal-wrapper">
    <form action="" @submit.prevent="sendEmail">
      <div class="input-wrapper">
        <div class="input-group">
          <label for="Firstname">Firstname</label>
          <input type="text" name="firstname" v-model="firstname" />
        </div>
        <div class="input-group">
          <label for="Lastname">Lastname</label>
          <input type="text" name="lastname" v-model="lastname" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="input-group">
          <label for="Mail">Mail</label>
          <input type="email" name="mail" v-model="mail" />
        </div>
        <div class="input-group">
          <label for="Phone">Phone</label>
          <input type="text" name="phone" v-model="phone" />
        </div>
      </div>
      <div class="input-radio">
        <label for="Services">What services do you need?</label>
        <div class="input-radio-wrapper">
          <div class="radio">
            <input
              type="radio"
              name="services"
              v-model="services"
              value="Website Development"
            />
            <label for="website development">Website Development</label>
          </div>
          <div class="radio">
            <input
              type="radio"
              name="services"
              v-model="services"
              value="Mobile Development"
            />
            <label for="Mobile Development">Mobile Development</label>
          </div>
          <div class="radio">
            <input
              type="radio"
              name="services"
              v-model="services"
              value="UI UX Design"
            />
            <label for="other">UI/UX Design</label>
          </div>
        </div>
      </div>
      <div class="input-textarea">
        <label for="Message">Message</label>
        <textarea name="message" v-model="message" rows="5"> </textarea>
      </div>
      <div class="btn-submit-wrapper">
        <input class="btn-submit" type="submit" value="Send Message" />
      </div>
    </form>
  </div>
  <!-- End of modal wrapper -->
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "modal-form",
  data() {
    return {
      firstname: "",
      lastname: "",
      mail: "",
      phone: "",
      services: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
    //   emailjs
    //     .sendForm(
    //       "SERVICE_WBS",
    //       "TEMPLATE_SERVICE_WBS",
    //       e.target,
    //       "user_TPdJ8HdhpQ2fkyo7mVK2P",
    //       {
    //         firstname: this.firstname,
    //         lastname: this.lastname,
    //         mail: this.mail,
    //         phone: this.phone,
    //         services: this.services,
    //         message: this.message,
    //       }
    //     )
    //     .then((res) => console.log(res.text))
    //     .catch((err) => console.log(err.message));
      this.$emit("thanks");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.modal-wrapper {
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .input-group:first-child {
      margin-right: 3rem;
    }

    .input-group {
      width: 50%;
      input {
        margin: 0.8rem 0;
        width: 100%;
        display: block;
        padding: 0.8rem 0;
        border: none;
        border-bottom: 2px solid $dark;
        outline: none;
        background: transparent;
        transition: border-bottom 0.3s;

        &:focus {
          border-bottom: 2px solid $light-blue;
        }
      }
    }
  }

  .input-radio {
    .input-radio-wrapper {
      margin: 0.8rem 0;
      padding: 0.5rem 0;
      display: flex;
      justify-content: space-between;

      .radio {
        width: 100%;

        label {
          font-size: 1.4rem;
          font-weight: 500;
        }

        input {
          margin-right: 0.6rem;
        }
      }
    }
  }

  .input-textarea {
    textarea {
      margin: 0.8rem 0;
      display: block;
      width: 100%;
      background: none;
      border: none;
      outline: none;
      border-bottom: 2px solid $dark;
      transition: border-bottom 0.3s;

      &:focus {
        border-bottom: 2px solid $light-blue;
      }
    }
  }

  .btn-submit-wrapper {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input[type="submit"] {
      cursor: pointer;
      border-radius: 1rem;
      width: 15rem;
      border: none;
      outline: none;
      background-color: $duff-blue;
      text-align: center;
      padding: 1rem 0;

      & {
        color: $light-gray;
        font-weight: 700;
        font-size: 1.4rem;
      }
    }
  }
}

/* Media query - Tablet styles */
@media (min-width: $tablet-width) and (max-width: $dekstop-width) {
  .modal-wrapper {
    .input-radio {
      .input-radio-wrapper {
        flex-direction: column;
      }
    }
  }
}

@media (max-width: $tablet-width) {
  .modal-wrapper {
    .input-wrapper {
      flex-direction: column;
      .input-group {
        width: 100%;
      }
    }
    .input-radio {
      .input-radio-wrapper {
        flex-direction: column;
      }
    }

    .btn-submit-wrapper {
      margin-top: 1rem;
    }
  }
}
</style>
