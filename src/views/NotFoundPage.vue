<template>
  <navbar />
  <section class="notfound">
    <div class="notfound-wrapper">
      <div class="notfound-image">
        <img :src="image" alt="404 Not Found" />
      </div>
      <div class="notfound-info">
        <div class="project-not-found">
          <p>Page not found</p>
        </div>
        <h4 class="notfound-title">Oh No! Error 404</h4>
        <p class="notfound-desc">You have been lost in the middle of jungle</p>
        <p class="notfound-desc2">Come back to the homepage</p>
        <div class="btn-to-home">
          <router-link :to="{ name: 'Home' }">
            Back to HomePage
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/global/Navbar";

export default {
  name: "not-found-page",
  components: {
    Navbar,
  },
  data() {
    return {
      image: require("../assets/images/404.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variable.scss";

.notfound-wrapper {
  display: flex;

  .notfound-image {
    width: 50%;
  }

  .notfound-info {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .project-not-found {
      cursor: pointer;
      width: 30%;
      padding: 1rem 0;
      border-radius: 3rem;
      text-align: center;
      background-color: $dark-blue;
      margin-bottom: 2rem;

      p {
        color: $light-gray;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .notfound-title {
      font-size: 7rem;
      color: $dark-blue;
      margin-bottom: 1rem;
    }

    .notfound-desc,
    .notfound-desc2 {
      font-size: 2.5rem;
      color: $light-blue;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .btn-to-home {
      cursor: pointer;
      width: 30%;
      text-align: center;
      padding: 1.5rem 0;
      background-color: $duff-blue;
      margin-top: 1rem;
      border-radius: 1rem;
      transition: background-color 0.5s;
      &:hover {
        background-color: $light-blue;
      }
      a {
        color: $light-gray;
        font-weight: 500;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
