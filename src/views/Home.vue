<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__fast"
    leave-active-class="animate__animated animate__backOutUp animate_fast"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <hero />
  <our-services />
  <customer-journey />
  <Team />
  <Footer />
</template>

<script>
import Navbar from "../components/global/Navbar";
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import CustomerJourney from '../components/home/CustomerJourney.vue';
import Team from "../components/home/Team";
import Modal from "../components/global/Modal";
import Footer from "../components/global/Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    OurServices,
    CustomerJourney,
    Team,
    Modal,
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

<style lang="scss" scoped></style>
