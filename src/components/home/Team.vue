<template>
  <section class="team">
    <h4 class="team-title">Our <span>great</span> team!</h4>
    <h4 class="team-postitle">
      Our headquarters is located in Lippo Karawaci, Banten
    </h4>
    <div class="team1-wrapper">
      <div class="team-bos">
        <div class="team-logo">
          <img :src="ceo.image" alt="Team Member" />
        </div>
        <div class="team-desc">
          <p class="team-name">{{ ceo.name }}</p>
          <p class="team-job">{{ ceo.job }}</p>
        </div>
      </div>
    </div>
    <div class="team2-wrapper">
      <team-member1 v-for="team in teams1" :key="team.name" :team="team" />
    </div>
    <div class="team3-wrapper">
      <team-member2 v-for="team in teams2" :key="team.name" :team="team" />
    </div>
  </section>
</template>

<script>
import TeamMember1 from "./TeamMember1";
import TeamMember2 from "./TeamMember2";

export default {
  name: "Team",
  data() {
    return {
      ceo: {
        name: "Kharansyah Tawadu Shalam",
        job: "CEO",
        image: require("../../assets/images/Vector/vector-ran.png"),
      },
      teams1: [
        {
          name: "Gery Santoso",
          job: "Fullstack Developer",
          image: require("../../assets/images/Vector/vector-gery.png"),
        },
        {
          name: "Muhammad Faisal Farhan",
          job: "Frontend Developer",
          image: require("../../assets/images/Vector/vector-fafa.png"),
        },
        {
          name: "Fadla Ichsan",
          job: "Frontend Developer",
          image: require("../../assets/images/Vector/vector-fadla.png"),
        },
        {
          name: "Deka Primatio Deandra",
          job: "Project Manager",
          image: require("../../assets/images/Vector/vector-deka.png"),
        },
      ],
      teams2: [
        {
          name: "Mochamad Rizky Zaldi",
          job: "Mobile Developer",
          image: require("../../assets/images/Vector/vector-zaldi.png"),
        },
        {
          name: "Rido Hendrawan",
          job: "Social Media Design",
          image: require("../../assets/images/Vector/vector-rido.png"),
        },
        {
          name: "Faiz Ramdhani",
          job: "Public Relation",
          image: require("../../assets/images/Vector/vector-faiz.png"),
        },
        {
          name: "Farrel Irsyad Fanny",
          job: "Social Media Planner",
          image: require("../../assets/images/Vector/vector-farrel.png"),
        },
      ],
    };
  },
  components: {
    TeamMember1,
    TeamMember2,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
.team-postitle {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.team-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;

  span {
    color: $duff-blue;
  }
}
.team1-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-bos,
.team-member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.team2-wrapper,
.team3-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.8rem 0;
}

.team-logo {
  width: 15rem;

  img {
    height: 15rem;
  }
}

.team-desc {
  text-align: center;

  .team-name {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .team-job {
    font-size: 1.4rem;
    font-weight: 700;
    color: $duff-blue;
  }
}

/* Media query - Tablet styles */
@media (max-width: $tablet-width) {
  .team2-wrapper,
  .team3-wrapper {
    flex-wrap: wrap;
  }

  .team-member {
    width: 50%;
    margin-bottom: 1rem;
  }
}
</style>
