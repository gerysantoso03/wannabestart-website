<template>
  <div class="thanks-wrapper">
    <div class="thanks-logo">
      <i class="fas fa-gifts"></i>
    </div>
    <h4 class="thanks-title">
      Thank you for <span>get contact</span> with us :)
    </h4>
  </div>
  <!-- End of thank modal -->
</template>

<script>
export default {
  name: "modal-thanks",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.thanks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.thanks-logo {
  padding: 1rem 0;
  margin-bottom: 1rem;
  i {
    font-size: 15rem;
    color: $duff-blue;
  }
}

.thanks-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  span {
    color: $duff-blue;
  }
}

@media only screen and (max-width: $tablet-width) {
  .thanks-title {
    font-size: 2rem;
  }
}
</style>
