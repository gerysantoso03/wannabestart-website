<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__fast"
    leave-active-class="animate__animated animate__backOutUp animate_fast"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <hero-customer />
  <customers />
  <customer-cards />
  <Footer />
</template>

<script>
import Modal from "../components/global/Modal";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import HeroCustomer from "../components/customerStory/HeroCustomer";
import Customers from "../components/customerStory/Customers";
import CustomerCards from "../components/customerStory/CustomerCards";

export default {
  name: "customer-story",
  components: {
    Navbar,
    Modal,
    HeroCustomer,
    Customers,
    CustomerCards,
    Footer,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style lang="scss"></style>
