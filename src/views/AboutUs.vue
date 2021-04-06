<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__faster"
    leave-active-class="animate__animated animate__backOutUp animate_faster"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <hero-about />
  <timeline />
  <Footer />
</template>

<script>
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import HeroAbout from "../components/aboutUs/HeroAbout";
import Timeline from "../components/aboutUs/Timeline";
import Modal from "../components/global/Modal";

export default {
  name: "about-us",
  components: {
    Navbar,
    Footer,
    HeroAbout,
    Timeline,
    Modal,
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
