<template>
  <header class="navbar">
    <div class="logo-wrapper">
      <div class="logo-img">
        <img :src="logo" alt="WBS Logo" />
      </div>
      <router-link :to="{ name: 'Home' }" class="logo-title"
        >WannaBeStart</router-link
      >
    </div>
    <div class="navbar-content">
      <router-link :to="{ name: 'AboutUs' }" class="navbar-item">
        About Us</router-link
      >
      <router-link :to="{ name: 'OurGreatTeam' }" class="navbar-item">
        Our Great Team</router-link
      >
      <router-link :to="{ name: 'Projects' }" class="navbar-item">
        Projects</router-link
      >
      <router-link :to="{ name: 'CustomerStory' }" class="navbar-item">
        Customers Story</router-link
      >
      <div class="btn-contact" @click="showModal">
        <p class="btn-title">Start a project</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    showModal() {
      this.$emit("show");
    },
  },
  data() {
    return {
      logo: require("../../assets/images/WBSLogo.png"),
    };
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
    justify-content: space-between;
    width: 50%;

    .navbar-item {
      transition: color 0.4s;
      font-weight: 700;
      &:hover {
        color: $light-blue;
      }
    }

    .btn-contact {
      padding: 1rem 3rem;
      cursor: pointer;
      border-radius: 3rem;
      background-color: $duff-blue;
      transition: background-color 0.4s;
      &:hover {
        background-color: $light-blue;
      }
    }
  }
}
.btn-title {
  color: $light-gray;
  font-size: 1.4rem;
  font-weight: 700;
}
</style>
