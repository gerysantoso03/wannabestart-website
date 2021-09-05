<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__fast"
    leave-active-class="animate__animated animate__backOutUp animate_fast"
  >
    <Modal v-if="isShowModal" @close="toggleModal" />
  </transition>
  <section class="great-team">
    <div class="our-team-photo">
      <img
        :src="require('../assets/images/Anggota/full-team-wide.jpg')"
        alt="Our Team Photo"
      />
    </div>
    <h4 class="great-team-title">Our <span>great</span> team</h4>
    <h4 class="great-team-postitle">See our teams profile to know better!</h4>
    <div class="great-team-wrapper">
      <great-team-member v-for="team in teams" :key="team.name" :team="team" />
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Modal from "../components/global/Modal";
import greatTeamMember from "../components/ourGreatTeam/greatTeamMember";

export default {
  name: "our-great-team",
  components: {
    Navbar,
    Footer,
    Modal,
    greatTeamMember,
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
  data() {
    return {
      isShowModal: false,
      teams: [
        {
          name: "Kharansyah Thawaddu Shalam",
          job: "CEO",
          linkedin: "https:/www.linkedin.com/in/kharansyahts/",
          github: "https:/github.com/rans0",
          instagram: "https:/www.instagram.com/dekrannn/",
          desc:
            "WannaBeStart I formed with three of my friends before, starting from my idea that wants to create a project that can be used by many people but in the end the project is abandoned, its funny hahaha and now focused on making money while improving skills while looking for clients while realizing WBS into a startup in the future. My Role at WannaBeStart is as a Backend Developer but sometimes I double as a shaman in order to increase the approval rate of prospective clients.",
          image: require("../assets/images/Anggota/ran.jpg"),
          isLeft: true,
        },
        {
          name: "Deka Primatio Deandra",
          job: "Project Manager",
          linkedin:
            "https:/www.linkedin.com/in/deka-primatio-deandra-5487061aa/",
          github: "https:/github.com/dekapd99",
          instagram: "https:/www.instagram.com/deka_pd/",
          desc:
            "Deka is a person who can bring a positive vibe and professionalism to a team. Can take care of finances and only with trust, all work can be done.",
          image: require("../assets/images/Anggota/deka.jpg"),
          isRight: true,
        },
        {
          name: "Gery Santoso",
          job: "Fullstack Developer",
          linkedin: "https:/www.linkedin.com/in/gerysantos03/",
          github: "https:/github.com/gerysantoso03",
          instagram: "https:/www.instagram.com/gerysntos/",
          desc:
            "I am an agile person, determined, and eager to learn new things especially in technologies. WannaBeStart is a place for me to grow and improve the skills i have, both soft and hard skills. I hope WannaBeStart can become enormous and successful company, that can be useful to community and be known across the world",
          image: require("../assets/images/Anggota/gery.jpg"),
          isLeft: true,
        },
        {
          name: "Muhammad Faisal Farhan",
          job: "Frontend Developer",
          linkedin: "https:/linkedin.com/in/muhammad-faisal-farhan",
          github: "https:/github.com/uzivurt0",
          instagram: "https:/www.instagram.com/faisal.frhan",
          desc:
            "Muhammad Faisal Farhan (Fafa) is a handsome boy from Ciputat that can be very reliable if asked, he is a very nice guy and fun to talk with. His main focus is in Frontend Developer. He really loves automotive, especially cars and bikes.",
          image: require("../assets/images/Anggota/fafa.jpg"),
          isRight: true,
        },
        {
          name: "Fadla Ichsan",
          job: "Frontend Developer",
          linkedin: "https:/www.linkedin.com/in/fadla-ichsan-a4a067207",
          github: "https:/github.com/IFadla",
          instagram: "https:/www.instagram.com/ifadla_/",
          desc:
            "people who like things in design and combined with technology. That's me, fadla",
          image: require("../assets/images/Anggota/fadla.jpg"),
          isLeft: true,
        },
        {
          name: "Mochamad Rizky Zaldi",
          job: "Mobile Developer",
          linkedin: "https:/www.linkedin.com/in/rizkyzaldi/",
          github: "https:/github.com/zaldi-99/",
          instagram: "https:/www.instagram.com/rizkyzaldi/",
          desc:
            "Zaldi is a person who accidentally entered the informatics department, but is now living life as a final year student. Zaldi always tries to give the best and believes that everything will be at the right time with the best results",
          image: require("../assets/images/Anggota/zaldi.jpg"),
          isRight: true,
        },
        {
          name: "Rido Hendrawan",
          job: "Social Media Design",
          linkedin: "https:/www.linkedin.com/in/rido-hendrawan-9752371a4/",
          github: "https:/github.com/ridohendrawan",
          instagram: "https:/www.instagram.com/rido.h01/",
          desc:
            "Hi, Want to know about me? Fine, I'm currently a computer science student who like to design but not really passion at code but i still have experience and understanding about code it self. That give me knowledge to design a good user interface which can actually be implemented at real project. Keep consistent to follow your dreams, at little bit quotes for ya'all. Cheers!",
          image: require("../assets/images/Anggota/rido.jpg"),
          isLeft: true,
        },
        {
          name: "Faiz Ramdhani",
          job: "Public Relation",
          linkedin: "",
          github: "https://github.com/frmdhn",
          instagram: "https://www.instagram.com/faiz_ramdhani/",
          desc:
            "Faiz is a student who feels lost in the world of informatics. He doesn't know much about the world of informatics and yet he thrives to achieving and becoming the best as he's got a hardworking personality as well as being able to adapt easily to any and every kind of surroundings. And thanks to WBS and its members, he's got himself a platform to further explore himself and teach him things in this world of informatics. Hope we all can succeed together!",
          image: require("../assets/images/Anggota/faiz.jpg"),
          isRight: true,
        },
        {
          name: "Farrel Irsyad Fanny",
          job: "Social Media Planner",
          linkedin: "https:/www.linkedin.com/in/farrel-irsyad-fanny-88a0911b9/",
          github: "https:/github.com/Farfan16",
          instagram: "https:/www.instagram.com/farrelfanny/",
          desc:
            "Farrel wasn't the type of guy who like to code, he never even code in his life until he went into college, majoring in informatics. Although Farrel have a lack of experience, he realise that technology keep evolving, and wtih a lot of room for him to explore, he'll try his best to catch up to technology around him.",
          image: require("../assets/images/Anggota/farel.jpg"),
          isLeft: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import ".././assets/scss/_variable.scss";
.our-team-photo {
  img {
    border-radius: 3rem;
  }
}

.great-team-title {
  font-size: 3rem;
  text-transform: uppercase;
  margin: 2rem 0 1rem;
  text-align: center;

  span {
    color: $duff-blue;
  }
}

.great-team-postitle {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.great-team-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 425px) {
  .great-team {
    padding: 3rem;
  }
}
</style>
