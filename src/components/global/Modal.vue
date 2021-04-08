<template>
  <div class="modal">
    <div class="modal-title-wrapper">
      <h4 class="modal-title">Contact <span>Us</span></h4>
      <div class="dismiss" @click.self="closeModal">
        &times;
      </div>
    </div>
    <h4 class="modal-postitle">
      Want to build a product? Just write us a message!
    </h4>
    <div class="modal-wrapper">
      <form action="">
        <div class="input-wrapper">
          <div class="input-group">
            <label for="Firstname">Firstname</label>
            <input type="text" />
          </div>
          <div class="input-group">
            <label for="Lastname">Lastname</label>
            <input type="text" />
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-group">
            <label for="Mail">Mail</label>
            <input type="email" />
          </div>
          <div class="input-group">
            <label for="Phone">Phone</label>
            <input type="text" />
          </div>
        </div>
        <div class="input-radio">
          <label for="Services">What services do you need?</label>
          <div class="input-radio-wrapper">
            <div class="radio">
              <input type="radio" name="services" value="Website Development" />
              <label for="website development">Website Development</label>
            </div>
            <div class="radio">
              <input type="radio" name="services" value="Mobile Development" />
              <label for="Mobile Development">Mobile Development</label>
            </div>
            <div class="radio">
              <input type="radio" name="services" value="UI/UX Design" />
              <label for="other">UI/UX Design</label>
            </div>
          </div>
        </div>
        <div class="input-textarea">
          <label for="Message">Message</label>
          <textarea name="message" rows="5">
Write your message...
            </textarea
          >
        </div>
        <div class="btn-submit-wrapper">
          <div class="btn-submit" @click="closeModal">
            <p>Send Message</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.modal {
  width: 70%;
  margin: 0 auto;
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: $light-gray;
  padding: 2.5rem;
  border-radius: 2rem;
  -webkit-box-shadow: 0px 0px 7px -1px rgba(46, 49, 58, 1);
  -moz-box-shadow: 0px 0px 7px -1px rgba(46, 49, 58, 1);
  box-shadow: 0px 0px 8px -1px rgba(46, 49, 58, 1);
}

.modal-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  .modal-title {
    font-size: 2.5rem;
    font-weight: bold;

    span {
      color: $duff-blue;
    }
  }

  .dismiss {
    font-size: 2.5rem;
    font-weight: bold;
    color: $duff-blue;
    cursor: pointer;
    transition: color 0.4s;
    &:hover {
      color: $light-blue;
    }
  }
}

.modal-postitle {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

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

    .btn-submit {
      cursor: pointer;
      border-radius: 1rem;
      width: 18rem;
      background-color: $duff-blue;
      text-align: center;
      padding: 1rem 0;
      transition: background-color 0.3s;

      &:hover {
        background-color: $light-blue;
      }

      p {
        color: $light-gray;
        font-weight: 500;
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
  .modal {
    top: 1rem;
  }

  .modal-postitle {
    display: none;
  }

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

      .btn-submit {
        width: 15rem;
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
