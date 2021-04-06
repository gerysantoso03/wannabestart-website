<template>
  <section class="currusrent">
    <div class="projects-wrapper">
      <div class="projects-image">
        <img :src="image" alt="Currusrent Image" />
      </div>
      <div class="projects-info">
        <a href="" target="_blank" class="projects-name">CurrusRent</a>
        <p class="projects-desc">{{ desc }}</p>
        <h4 class="tech-title">Technologies we use :</h4>
        <div class="projects-tech">
          <div class="web">
            <div class="web-title">
              <p>Website</p>
              <p>:</p>
            </div>
            <div class="web-tech">
              <div class="tech-item">
                <i class="fab fa-php"></i>
              </div>
              <div class="tech-item">
                <i class="fab fa-laravel"></i>
              </div>
              <div class="tech-item">
                <i class="fab fa-css3-alt"></i>
              </div>
              <div class="tech-item">
                <i class="fab fa-js"></i>
              </div>
            </div>
          </div>
          <div class="design">
            <div class="design-title">
              <p>Design</p>
              <p>:</p>
            </div>
            <div class="design-tech">
              <div class="tech-item">
                <i class="fab fa-figma"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "currusrent",
  data() {
    return {
      image: require("../../assets/images/curus.png"),
      desc:
        "CurrusRent is a marketplace for vehicle rental service providers and users to make transactions with each other. Currusrent provide comfort, safety, and convenience for users and service providers in carrying out the vehicle rental process. Currusrent will be a new breakthrough in providing something different in vehicle rental activities",
    };
  },
};
</script>

<style lang="scss" scoped></style>
