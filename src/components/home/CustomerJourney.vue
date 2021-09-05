<template>
  <section class="customer-journey">
    <h1 class="customer-journey-title">
      start your journey with <span>wannabestart</span>
    </h1>
    <div class="flow-wrapper">
      <div class="flow-desc">
        <img :src="meeting" alt="" />
        <h1><span>WBS</span> Development Process Flow</h1>
      </div>
      <div class="flow-image">
        <img :src="flowWBS" alt="Flow WBS" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "customer-journey",
  data() {
    return {
      flowWBS: require("../../assets/images/Flow WBS.png"),
      meeting: require("../../assets/images/meeting.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.customer-journey {
  .customer-journey-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;
    text-transform: uppercase;

    span {
      color: $duff-blue;
    }
  }

  .flow-wrapper {
    display: flex;
  }

  .flow-desc {
    flex: 0 0 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 5rem;
      font-weight: 500;
      text-align: center;
      line-height: 6rem;

      span {
        color: $duff-blue;
      }
    }
  }

  .flow-image {
    flex: 0 0 70%;
  }
}

/* Media query - Tablet Styles */
@media (max-width: $dekstop-width) {
  .customer-journey {
    .customer-journey-title {
      font-size: 2.5rem;
    }

    .flow-wrapper {
      flex-direction: column;
    }

    .flow-desc {
      img,
      h1 {
        display: none;
      }
    }
  }
}
</style>
