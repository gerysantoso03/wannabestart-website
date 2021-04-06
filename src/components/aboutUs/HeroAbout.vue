<template>
  <section class="hero-about">
    <div class="hero-about-wrapper">
      <div class="about-image">
        <img :src="img" alt="About Image" />
      </div>
      <div class="about-desc">
        <div class="about-story">
          <h4 class="story-title">The <span>WannaBeStart</span> Story</h4>
          <p class="story-desc">
            Our story begin in May 2020. Back then, WannaBeStart just a small
            organization that established by 4 computer science college student
            focusing to expand their skills and portfolios
          </p>
          <p class="story-desc">
            Today WannaBeStart have 9 active members that focused on their own
            job and eager to make WannaBeStart become the best digital agency in
            website and mobile development
          </p>
        </div>
        <div class="about-mission">
          <h4 class="mission-title"><span>WannaBeStart</span> Mission</h4>
          <p class="mission-desc">
            <span>Our mission : </span> become a digital agency that can help
            company or individual problems in website and mobile development
            through a fast production workflow process and original creative
            ideas
          </p>
        </div>
        <div class="about-moto">
          <h4 class="moto-title"><span>WannaBeStart</span> Moto</h4>
          <p class="moto-desc">Creative, Fast & Trustworthy</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero-about",
  data() {
    return {
      img: require("../../assets/images/hero-about.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.hero-about-wrapper {
  display: flex;
  .about-image {
    width: 50%;
  }

  .about-desc {
    padding: 2rem 1rem;
    width: 50%;

    .about-story,
    .about-mission {
      margin-bottom: 2rem;
    }

    .mission-title,
    .story-title,
    .moto-title {
      font-size: 2rem;
      span {
        color: $duff-blue;
      }
    }
    .mission-desc,
    .story-desc,
    .moto-desc {
      font-size: 1.6rem;
      font-weight: 300;
      text-align: justify;
      margin: 0.8rem 0;

      span {
        color: $light-blue;
        font-weight: 700;
      }
    }
  }
}
</style>
