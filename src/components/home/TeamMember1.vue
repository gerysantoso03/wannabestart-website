<template>
  <div class="team-member">
    <div class="team-logo">
      <img :src="team.image" alt="Team Member" />
    </div>
    <div class="team-desc">
      <p class="team-name">{{ team.name }}</p>
      <p class="team-job">{{ team.job }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "team-member1",
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
