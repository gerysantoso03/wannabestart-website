<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__faster"
    leave-active-class="animate__animated animate__backOutUp animate_faster"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <onihat />
  <currusrent />
  <nisuma />
  <Footer />
</template>

<script>
import Modal from "../components/global/Modal";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Onihat from "../components/projects/Onihat";
import Currusrent from "../components/projects/Currusrent";
import Nisuma from "../components/projects/Nisuma";

export default {
  name: "projects",
  components: {
    Navbar,
    Modal,
    Onihat,
    Currusrent,
    Nisuma,
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

<style lang="scss">
@import "../assets/scss/_variable.scss";

.projects-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  span {
    color: $duff-blue;
  }
}

.projects-wrapper {
  display: flex;

  .projects-info {
    width: 50%;
    padding: 2rem;

    .projects-name {
      font-size: 3rem;
      font-weight: 700;
      color: $duff-blue;
      transition: color 0.5s;
      &:hover {
        color: $light-blue;
      }
    }

    .projects-desc {
      font-size: 1.8rem;
      line-height: 3rem;
      text-align: justify;
      margin-bottom: 1rem;
    }

    .tech-title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .projects-tech {
      width: 80%;
      display: flex;
      flex-direction: column;

      .web-title,
      .mobile-title,
      .design-title {
        display: flex;
        justify-content: space-between;
        width: 18%;
        margin-bottom: 0.5rem;
        p {
          font-size: 1.6rem;
          font-weight: 700;
          color: $duff-blue;
        }
      }

      .web-tech,
      .mobile-tech,
      .design-tech {
        margin: 0.5rem 0;
        display: flex;

        .tech-item {
          border: 1px solid $light-blue;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 1rem;
          height: 5rem;
          width: 5rem;
          cursor: pointer;
          transition: background-color 0.5s;

          &:hover {
            background-color: $duff-blue;
            i {
              color: $light-gray;
            }
          }
          i {
            transition: color 0.5s;
            color: $duff-blue;
            font-size: 2.5rem;
          }
        }
      }
    }
  }

  .projects-image {
    width: 50%;
  }
}
</style>
