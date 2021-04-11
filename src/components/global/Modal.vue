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
    <transition
      enter-active-class="animate__animated animate__lightSpeedInLeft animate_delay-1s"
    >
      <modal-form v-if="!isThanks" @thanks="toggleIsThanks" />
      <modal-thanks v-else />
    </transition>
  </div>
</template>

<script>
import ModalForm from "./ModalForm";
import ModalThanks from "./ModalThanks";

export default {
  name: "modal",
  components: {
    ModalForm,
    ModalThanks,
  },
  data() {
    return {
      isThanks: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    toggleIsThanks() {
      this.isThanks = !this.isThanks;
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

@media (max-width: $tablet-width) {
  .modal {
    top: 1rem;
  }

  .modal-postitle {
    display: none;
  }
}
</style>
