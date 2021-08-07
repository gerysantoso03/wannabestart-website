 <template>
  <section class="customer-cards">
    <h4 class="customer-cards-title">
      See what are our <span>customers</span> tell us about
    </h4>
    <div class="customer-cards-wrapper">
      <div class="customer-card" v-for="client in clients" :key="client.name">
        <div class="quote">
          <i class="fas fa-quote-left"></i>
        </div>
        <p class="desc">{{ client.testimony }}</p>
        <div class="customer-card-person">
          <div class="person-image">
            <i class="fas fa-user-alt"></i>
          </div>
          <div class="person-desc">
            <p class="person-name">{{ client.name }}</p>
            <p class="person-job-age">{{ client.job }} - {{ client.age }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "customer-cards",
  data() {
    return {
      clients: [
        {
          name: "Jeffry Nilam",
          job: "COO Nisuma Pepercups",
          age: 20,
          testimony:
            "Kinerja tim WannaBeStart saat mengerjakan website kami cukup memuaskan, karena saya melihat tim bisa mensinergikan semua elemen dalam tim secara maksimal sehingga alur pengerjaan website sangat teratur dan tepat waktu. Hasil yang diberikan juga cukup memuaskan karena tim memiliki wawasan website yang cukup luas dan luar biasa. Sehingga menurut saya tim ini layak mendapatkan proyek lebih. Pesan untuk tim, kedepannya semoga bisa lebih berinovasi secara kreatif terhadap jasa dan produk yang dihasilkan dan dapat beradaptasi terhadap perubahan ekonomi dan era digital di industri 4.0",
        },
        {
          name: "Varent Tamarisca",
          job: "Founder Cooking Media",
          age: 21,
          testimony:
            "Aku suka banget sama tampilannya, walaupun banyak fungsi dalam satu page tapi tetap rapi dan tidak melupakan estetika. Temen-temen WBS juga asik banget, jadi gak kaku pas ngobrol tentang project. Thank You WBS",
        },
        {
          name: "Cinthya",
          job: "IT Cooking Media",
          age: 20,
          testimony:
            "Good, bagus banget. Hasil prototype yang dibuat dalam waktu singkat sangat bagus. Ditambah udah responsive dan stylingnya rapi banget. Untuk fitur juga udah ada yang dibikin jalan serta udah banyak yang dibikinin templatenya langsung, jd kita tinggal ubah ubah aja. Makasih WBS! semangat teruss",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.customer-cards {
  background-color: $light-gray;

  .customer-cards-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    span {
      color: $duff-blue;
    }
  }

  .customer-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;

    .customer-card {
      -webkit-box-shadow: 1px 3px 5px 0px rgba(166, 175, 200, 1);
      -moz-box-shadow: 1px 3px 5px 0px rgba(166, 175, 200, 1);
      box-shadow: 1px 3px 5px 0px rgba(166, 175, 200, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #fff;
      padding: 2rem;
      border-radius: 1rem;
      height: 40rem;

      .quote {
        margin-bottom: 1rem;
        i {
          font-size: 2rem;
          color: $duff-blue;
        }
      }

      .desc {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: justify;
      }

      .customer-card-person {
        display: flex;

        .person-image {
          flex: 0 0 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: $duff-blue;
          }
        }

        .person-desc {
          margin-left: 1rem;
          .person-name {
            font-size: 1.6rem;
            font-weight: 700;
            color: $duff-blue;
          }
          .person-job-age {
            font-size: 1.4rem;
            font-weight: 500;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 425px) {
  .customer-cards {
    padding: 3rem;

    .customer-cards-title {
      font-size: 2.5rem;
    }
  }
}
</style>
