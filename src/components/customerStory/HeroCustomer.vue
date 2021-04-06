<template>
  <section class="hero-customer">
    <div class="hero-customer-wrapper">
      <div class="hero-customer-image">
        <img :src="image" alt="Hero Customer Image" />
      </div>
      <div class="hero-customer-info">
        <h4 class="customer-title">WannaBeStart</h4>
        <h4 class="customer-postitle">Customer Stories</h4>
        <p class="customer-desc">
          <span>Efficient production, reliable, modern design</span> - There are
          just the few of the things our customers are saying about us
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "hero-customer",
  data() {
    return {
      image: require("../../assets/images/hero-customer.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.hero-customer-wrapper {
  display: flex;

  .hero-customer-image {
    width: 50%;
    img {
      border-radius: 2rem;
    }
  }

  .hero-customer-info {
    width: 50%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .customer-title {
      font-size: 4rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $duff-blue;
      font-weight: 700;
    }

    .customer-postitle {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .customer-desc {
      font-size: 2rem;
      font-weight: 500;
      span {
        color: $duff-blue;
        font-weight: 700;
      }
    }
  }
}
</style>
