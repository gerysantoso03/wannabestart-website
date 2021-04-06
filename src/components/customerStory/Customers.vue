<template>
  <section class="customers">
    <h4 class="customers-title">Our <span>Recent</span> Customers</h4>
    <div class="customers-wrapper">
      <div
        class="customers-logo-card"
        v-for="client in clients"
        :key="client.id"
      >
        <img :src="client.image" alt="Client Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "customers",
  data() {
    return {
      clients: [
        {
          id: 1,
          image: require("../../assets/images/logo-nisuma-about-us.png"),
        },
        {
          id: 2,
          image: require("../../assets/images/Logo Aero Transparan.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.customers-title {
  font-size: 3rem;
  margin-bottom: 2rem;
  span {
    color: $duff-blue;
  }
}

.customers-wrapper {
  display: flex;
  border: 2px solid $light-gray;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(166, 175, 200, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(166, 175, 200, 1);
  box-shadow: 0px 3px 5px 0px rgba(166, 175, 200, 1);

  .customers-logo-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid $dark-gray;
    img {
      width: 60%;
    }
  }

  .customers-logo-card:last-child {
    border-right: 0;
  }
}
</style>
