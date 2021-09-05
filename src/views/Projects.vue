<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__fast"
    leave-active-class="animate__animated animate__backOutUp animate_fast"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <item-project
    v-for="project in projects"
    :key="project.id"
    :project="project"
  />
  <Footer />
</template>

<script>
import Modal from "../components/global/Modal";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import ItemProject from "../components/projects/ItemProject";

export default {
  name: "projects",
  components: {
    Navbar,
    Modal,
    ItemProject,
    Footer,
  },
  data() {
    return {
      isShowModal: false,
      projects: [
        {
          id: 1,
          name: "CurrusRent",
          image: require("../assets/images/curus.png"),
          link: "",
          desc:
            "CurrusRent is a marketplace for vehicle rental service providers and users to make transactions with each other. Currusrent provide comfort, safety, and convenience for users and service providers in carrying out the vehicle rental process. Currusrent will be a new breakthrough in providing something different in vehicle rental activities",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-php",
            },
            {
              id: 2,
              class: "fab fa-laravel",
            },
            {
              id: 3,
              class: "fab fa-css3-alt",
            },
            {
              id: 4,
              class: "fab fa-js",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
        {
          id: 2,
          name: "Nisuma Paper",
          image: require("../assets/images/nisuma.png"),
          link: "https://nisumapapercups.com/",
          desc:
            "Nisuma was our first client project. Nilam Sukses Mandiri is a company that provides high quality food and beverage containers, which is hygienic and enviromental-friendly. WannaBeStart develops the functionality and design of the nisuma website, so that it becomes modern and user-friendly for all nisuma web visitors",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-php",
            },
            {
              id: 2,
              class: "fab fa-laravel",
            },
            {
              id: 3,
              class: "fab fa-css3-alt",
            },
            {
              id: 4,
              class: "fab fa-js",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
        {
          id: 3,
          name: "Aero 99 Autocars",
          image: require("../assets/images/aero.png"),
          link: "https://aero99autocars.com/",
          desc:
            "Aero 99 autocars was our second client project. Aero 99 autocars is a marketplace and garage for people to entrust their vehicle for sale. WannaBeStart built the functionality and design of aero 99 website, therefore aero 99 can expand their bussiness and be better know by many people",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-php",
            },
            {
              id: 2,
              class: "fab fa-laravel",
            },
            {
              id: 3,
              class: "fab fa-css3-alt",
            },
            {
              id: 4,
              class: "fab fa-js",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
        {
          id: 4,
          name: "Cooking Media",
          image: require("../assets/images/cookmed.png"),
          link: "",
          desc:
            "Cooking Media is a startup and our comrades in Skystar. Cooking Media provides a lot of food recipes and ingredients that help people learn by theirselves how to cook and make good cuisine. Wannabestart cooperate with Cooking Media to make prototype for their website and cooking media will give us feedback about our work flow during development.",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-php",
            },
            {
              id: 2,
              class: "fab fa-laravel",
            },
            {
              id: 3,
              class: "fab fa-css3-alt",
            },
            {
              id: 4,
              class: "fab fa-js",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
        {
          id: 5,
          name: "WBS Links",
          image: require("../assets/images/wbsLink.png"),
          link: "",
          desc:
            "WBS Links, connect all your link platform needs with just one link. Share links from online stores, tiktok, youtube, official websites and others, with an attractive custom display that makes your branding more stylish.",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-laravel",
            },
            {
              id: 2,
              class: "fab fa-react",
            },
            {
              id: 3,
              class: "fab fa-css3-alt",
            },
            {
              id: 4,
              class: "fab fa-js",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
        {
          id: 6,
          name: "Onihat",
          image: require("../assets/images/onihat.png"),
          link: "https://onihat.wannabestart.com/onihat",
          desc:
            "Onihat is a social media to share emotions, feelings and experiences with someone anonymously. Onihat allows the user to feeling release of things that are burdens, sorrow, anxiety towards someone freely. Hopefully onihat can help people express everything they want to share every day without feeling fearful",
          webTechnologies: [
            {
              id: 1,
              class: "fab fa-vuejs",
            },
            {
              id: 2,
              class: "fab fa-sass",
            },
          ],
          mobileTechnologies: [
            {
              id: 1,
              class: "fab fa-react",
            },
            {
              id: 2,
              class: "fab fa-css3-alt",
            },
          ],
          designTechnologies: [
            {
              id: 1,
              class: "fab fa-figma",
            },
          ],
        },
      ],
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

      .tech-wrapper {
        display: flex;
        align-items: center;
        // border: 1px solid $dark;
      }

      .web-title,
      .mobile-title,
      .design-title {
        display: flex;
        justify-content: space-between;
        width: 20%;
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
        margin: 0.5rem 2rem;
        display: flex;
        flex-wrap: wrap;

        .tech-item {
          border: 1px solid $light-blue;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin: 0.5rem 1rem;
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

/* Media query - Tabler styles */
@media (min-width: $tablet-width) and (max-width: $dekstop-width) {
  .projects {
    .projects-wrapper {
      flex-direction: column;

      .projects-info {
        width: 100%;
      }

      .projects-image {
        width: 60%;
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }
}

/* Media query - Mobile styles */
@media (max-width: $tablet-width) {
  .projects {
    padding: 3rem;

    .projects-wrapper {
      flex-direction: column;

      .projects-image {
        display: none;
      }

      .projects-info {
        width: 100%;

        .projects-tech {
          width: 100%;
        }
      }
    }
  }
}
</style>
