<template>
  <section class="onihat">
    <h4 class="projects-title">Our <span>awesome</span> projects</h4>
    <div class="projects-wrapper">
      <div class="projects-info">
        <a href="" target="_blank" class="projects-name">Onihat</a>
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
                <i class="fab fa-vuejs"></i>
              </div>
              <div class="tech-item">
                <i class="fab fa-sass"></i>
              </div>
            </div>
          </div>
          <div class="mobile">
            <div class="mobile-title">
              <p>Mobile</p>
              <p>:</p>
            </div>
            <div class="mobile-tech">
              <div class="tech-item">
                <i class="fab fa-react"></i>
              </div>
              <div class="tech-item">
                <i class="fab fa-css3-alt"></i>
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
      <div class="projects-image">
        <img :src="image" alt="Onihat Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "onihat",
  data() {
    return {
      image: require("../../assets/images/onihat.png"),
      desc:
        "Onihat is a social media to share emotions, feelings and experiences with someone anonymously. Onihat allows the user to feeling release of things that are burdens, sorrow, anxiety towards someone freely. Hopefully onihat can help people express everything they want to share every day without feeling fearful",
    };
  },
};
</script>

<style lang="scss" scoped></style>
