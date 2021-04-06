<template>
  <section class="nisuma">
    <div class="projects-wrapper">
      <div class="projects-info">
        <a :href="link" target="_blank" class="projects-name">Nisuma Paper</a>
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
      <div class="projects-image">
        <img :src="image" alt="Nisuma Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "nisuma",
  data() {
    return {
      image: require("../../assets/images/nisuma.png"),
      desc:
        "Nisuma was our first client project. Nilam Sukses Mandiri is a company that provides high quality food and beverage containers, which is hygienic and enviromental-friendly. WannaBeStart develops the functionality and design of the nisuma website, so that it becomes modern and user-friendly for all nisuma web visitors",
      link: "https://nisumapapercups.com/",
    };
  },
};
</script>

<style lang="scss" scoped></style>
