<template>
  <section class="projects">
    <div class="projects-wrapper">
      <div class="projects-image">
        <img :src="project.image" alt="Project Image" />
      </div>
      <div class="projects-info">
        <a :href="project.link" target="_blank" class="projects-name">{{
          project.name
        }}</a>
        <p class="projects-desc">{{ project.desc }}</p>
        <h4 class="tech-title">Technologies we use :</h4>
        <div class="projects-tech">
          <div class="web" v-if="project.webTechnologies">
            <div class="tech-wrapper">
              <div class="web-title">
                <p>Website</p>
                <p>:</p>
              </div>
              <div class="web-tech">
                <div
                  class="tech-item"
                  v-for="tech in project.webTechnologies"
                  :key="tech.class"
                >
                  <i :class="tech.class"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- End of web -->
          <div class="mobile" v-if="project.mobileTechnologies">
            <div class="tech-wrapper">
              <div class="mobile-title">
                <p>Mobile</p>
                <p>:</p>
              </div>
              <div class="mobile-tech">
                <div
                  class="tech-item"
                  v-for="tech in project.mobileTechnologies"
                  :key="tech.class"
                >
                  <i :class="tech.class"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- End of mobile -->
          <div class="design" v-if="project.designTechnologies">
            <div class="tech-wrapper">
              <div class="design-title">
                <p>Design</p>
                <p>:</p>
              </div>
              <div class="design-tech">
                <div
                  class="tech-item"
                  v-for="tech in project.designTechnologies"
                  :key="tech.class"
                >
                  <i :class="tech.class"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- End of design -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "item-project",
  props: ["project"],
};
</script>

<style lang="scss" scoped></style>
