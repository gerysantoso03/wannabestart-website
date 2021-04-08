<template>
  <navbar @show="toggleModal" />
  <!-- Transition for showing modal -->
  <transition
    enter-active-class="animate__animated animate__backInDown animate__faster"
    leave-active-class="animate__animated animate__backOutUp animate_faster"
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
            "WannaBeStart saya bentuk bersama ke-tiga teman saya sebelumnya, berawal dari ide saya yang ingin membuat suatu project yang bisa digunakan oleh orang banyak namun pada akhirnya project tersebut terlantar dan sekarang fokus mencari uang sekaligus meningkatkan skill sembari mencari client sekaligus mewujudkan WBS menjadi sebuah startup kedepannya. Kerjaan saya di WannaBeStart adalah sebagai Backend Developer namun terkadang saya merangkap menjadi dukun agar meningkatkan rate approval terhadap calon client.",
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
            "Deka adalah orang yang dapat membawa positif vibe dan profesionalisme di dalam sebuah tim. Dapat mengurus keuangan dan surat menyurat. Hanya dengan kepercayaan, semua pekerjaan dapat diselesaikan. Karena ia percaya 1 hal yang pasti bahwa : 'Uang tidak dapat memberikan kebahagiaan, KALO SEDIKIT' - Pihak Keuangan WannaBeStart",
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
            "Buat apa rajin bekerja, kalau client suka bayar menunda-nunda :)",
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
            "Fafa adalah mahasiswa Informatika yang juga memiliki passion di bidang desain grafis, Fafa adalah seorang anak dari keluarga yang berkecukupan, karena Alhamdulillah semuanya serba cukup. Seorang yang insya Allah tegas dan pemberani katanya. Hobi Fafa adalah motoran, jadi kalau ada yang mau motoran sembari ngupi santai boleh dikontak",
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
            "Fadla adalah mahasiswa informatika yang memiliki jiwa seni dan desain, ketika sebuah karya seni dan teknologi disatukan akan menciptakan suatu hal yang sangat indah untuk dipandang maupun digunakan, dengan tujuan saya yaitu dapat memberikan warna bagi orang-orang yang membutuhkan walaupun hanya setetes warna saja itu merupakan suatu tujuan yang harus saya kejar mulai dari sekarang.",
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
            "Zaldi adalah mahasiswa yang tidak sengaja tercebur pada bidang IT namun harus tetap bertahan sampai menemukan daratan. Pada Wannabestart saat ini memegang peran sebagai mobile developer sambil terus memperdalam ilmu pada bidang mobile development agar produk yang dihasilkan oleh wannabestart dapat relevan dengan kebutuhan pasar.",
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
            "Rido adalah mahasiswa informatika yang kreatif dan penuh dengan ide baru serta hobi dalam membuat illustrasi dan design yang dapat menyampaikan maksud yang diinginkannya. Menjadi anak muda yang penuh dengan rasa ingin tau dan mencoba segala hal baru yang menarik serta bagian dari WannaBeStart untuk mewujudkan design yang kreatif dan menjadi bagian invoasi untuk mempersatukan kemampuan dari tim untuk mencapai suatu tujuan.",
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
            "Faiz adalah mahasiswa yang merasa tersesat di jurusan informatika. saya tidak mengerti hal banyak tentang dunia informatika. Tetapi terimakasih untuk WBS dan anggotanya karena memberikan saya wadah untuk lebih mengeksplor diri saya dan mengajarkan saya hal-hal didunia informatika ini. Semoga kita sukses bersama!!",
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
            "'Jangan lupa makan, tidur, istirahat' Maka dari itu saya selalu makan, tidur, istirahat :)",
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
