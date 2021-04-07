<template>
  <section class="hero">
    <div class="hero-info-wrapper">
      <h4 class="hero-title">Solutions For</h4>
      <h4 class="hero-title-blue">Big Future</h4>
      <p class="hero-info">
        Developing website with a simple yet functional function.
      </p>
      <p class="hero-info-2">
        From websites, mobile applications, and UI/UX designs. We will help you
        build your dream products beyond what is imagined
      </p>
      <button class="btn-hero">
        <router-link :to="{ name: 'Projects' }">
          <a href="">See our work</a>
        </router-link>
      </button>
    </div>
    <div class="hero-logo-wrapper">
      <img :src="heroLogo" alt="Hero Logo" />
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      heroLogo: require("../../assets/images/hero.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.hero {
  display: flex;
  align-items: center;

  .hero-info-wrapper {
    padding: 2rem;
    width: 50%;

    .hero-title {
      font-size: 4.2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: bolder;
    }

    .hero-title-blue {
      color: $duff-blue;
      font-size: 3.8rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      font-weight: bolder;
    }

    .hero-info {
      margin-bottom: 0.5rem;
      font-weight: 700;
      font-size: 2rem;
      text-align: justify;
    }

    .hero-info-2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      text-align: justify;
    }

    .btn-hero {
      padding: 1rem 2.5rem;
      border-radius: 2rem;
      outline: none;
      cursor: pointer;
      transition: background-color 0.4s;
      border: none;
      background-color: $duff-blue;

      a {
        color: $light-gray;
        font-weight: 700;
      }

      &:hover {
        background-color: $light-blue;
      }
    }
  }

  .hero-logo-wrapper {
    width: 50%;
    img {
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
      border-radius: 3rem;
    }
  }
}

/* Media query - Tablet Styles */
@media (min-width: $tablet-width) and (max-width: $dekstop-width) {
  .hero {
    .hero-logo-wrapper {
      width: 45%;
    }

    .hero-info-wrapper {
      width: 55%;

      .hero-title {
        font-size: 3.2rem;
      }

      .hero-title-blue {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
      }

      .hero-info {
        font-size: 1.6rem;
      }
      .hero-info-2 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
    }
  }
}

/* Media query - Mobile styles */
@media (max-width: $tablet-width) {
  .hero {
    .hero-logo-wrapper {
      display: none;
    }
    .hero-info-wrapper {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
