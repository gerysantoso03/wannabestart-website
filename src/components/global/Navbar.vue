<template>
  <header class="navbar">
    <div id="navbar-responsive" :class="{ showNavRes: isActive }">
      <div id="wrapper-items-responsive" :class="{ showItems: isActive }">
        <router-link :to="{ name: 'AboutUs' }" class="navbar-item-res"
          >About Us</router-link
        >
        <router-link :to="{ name: 'OurGreatTeam' }" class="navbar-item-res"
          >Our Great Team</router-link
        >
        <router-link :to="{ name: 'Projects' }" class="navbar-item-res"
          >Projects</router-link
        >
        <router-link :to="{ name: 'CustomerStory' }" class="navbar-item-res"
          >Customers Story</router-link
        >
      </div>
      <div id="btn-contact" @click="showModal" :class="{ showItems: isActive }">
        <p class="btn-title">Start a project</p>
      </div>
    </div>

    <div class="logo-wrapper">
      <div class="logo-img">
        <img :src="logo" alt="WBS Logo" />
      </div>
      <router-link :to="{ name: 'Home' }" class="logo-title"
        >WannaBeStart</router-link
      >
    </div>

    <div class="navbar-content">
      <div class="container-nav-items" v-if="!mobileView">
        <div class="wrapper-items">
          <router-link :to="{ name: 'AboutUs' }" class="navbar-item"
            >About Us</router-link
          >
          <router-link :to="{ name: 'OurGreatTeam' }" class="navbar-item"
            >Our Great Team</router-link
          >
          <router-link :to="{ name: 'Projects' }" class="navbar-item"
            >Projects</router-link
          >
          <router-link :to="{ name: 'CustomerStory' }" class="navbar-item"
            >Customers Story</router-link
          >
        </div>
        <div class="btn-contact" @click="showModal">
          <p class="btn-title">Start a project</p>
        </div>
      </div>

      <div class="container-nav-items-responsive" v-if="mobileView">
        <i class="fas fa-bars burger-icon" @click="showNavbarResponsive"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      mobileView: true,
      isActive: false,
      showItems: false,
      showNavResponsive: false,
      logo: require("../../assets/images/WBSLogo.png"),
      window: {
        width: 0,
        height: 0,
      },
    };
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    showModal() {
      this.$emit("show");
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

      if (this.window.width <= 950) {
        this.mobileView = true;
      } else {
        this.isActive = false;
        this.mobileView = false;
      }
    },
    showNavbarResponsive(e) {
      this.showNavResponsive = !this.showNavResponsive;
      this.isActive = !this.isActive;
      this.showItems = !this.showItems;
      e.target.classList.toggle("rotate-burger");
      e.target.classList.toggle("fa-bars");
      e.target.classList.toggle("fa-times");

      console.log(e.target);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
.navbar {
  width: 100%;
  padding: 1.5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-wrapper {
    display: flex;
    align-items: center;

    .logo-img {
      width: 5rem;
      margin-right: 1rem;
    }

    .logo-title {
      transition: color 0.4s;
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      &:hover {
        color: $light-blue;
      }
    }
  }

  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    .container-nav-items {
      display: flex;

      .wrapper-items {
        margin-right: 2.5rem;
        display: flex;
        align-items: center;

        .navbar-item {
          transition: color 0.4s;
          font-weight: 700;
          margin-left: 2rem;
          &:hover {
            color: $light-blue;
          }
        }
      }

      .btn-contact {
        padding: 0.7rem 3rem;
        cursor: pointer;
        border-radius: 3rem;
        background-color: $duff-blue;
        transition: background-color 0.4s;
        &:hover {
          background-color: $light-blue;
        }
        .btn-title {
          color: $light-gray;
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }

    .container-nav-items-responsive {
      .burger-icon {
        font-size: 2.5rem;
        color: $dark-blue;
        z-index: 2;
      }

      .rotate-burger {
        color: $dark-blue;
        transition: all 0.3s ease;
      }
    }
  }

  #navbar-responsive {
    position: absolute;
    margin-top: 66px;
    width: 0%;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding-top: 10rem;
    transition: all 0.3s ease;

    #wrapper-items-responsive {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2rem;
      opacity: 0;

      .navbar-item-res {
        width: 100%;
        text-align: center;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid $light-gray;
        margin-bottom: 2rem;
        font-weight: 700;
        transition: color 0.4s;
        &:hover {
          color: $light-blue;
        }
      }
    }

    #btn-contact {
      padding: 0.7rem 3rem;
      cursor: pointer;
      border-radius: 3rem;
      background-color: $duff-blue;
      transition: background-color 0.4s;
      opacity: 0;

      &:hover {
        background-color: $light-blue;
      }
      .btn-title {
        color: $light-gray;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }

  .showNavRes {
    width: 100% !important;
  }

  .showItems {
    opacity: 1 !important;
  }
}

@media only screen and (max-width: $tablet-width) {
  .navbar {
    padding: 1.5rem 3rem;
  }
}

@media only screen and (max-width: 425px) {
  .navbar {
    padding: 1.5rem 3rem;
  }
}
</style>
