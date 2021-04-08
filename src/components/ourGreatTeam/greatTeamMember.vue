<template>
  <div v-if="team.isRight" class="great-team-card">
    <div class="card-image-right">
      <img :src="team.image" alt="Team Image" />
    </div>
    <div class="card-desc-wrapper-left">
      <h4 class="card-name">{{ team.name }}</h4>
      <h4 class="card-job">{{ team.job }}</h4>
      <p class="card-info">
        {{ team.desc }}
      </p>
      <div class="card-social-media">
        <div class="social-media-item">
          <a :href="team.linkedin" target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        <div class="social-media-item">
          <a :href="team.github" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </div>
        <div class="social-media-item">
          <a :href="team.instagram" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Right Team -->

  <div v-if="team.isLeft" class="great-team-card column-reverse">
    <div class="card-desc-wrapper-right">
      <h4 class="card-name">{{ team.name }}</h4>
      <h4 class="card-job">{{ team.job }}</h4>
      <p class="card-info">{{ team.desc }}</p>
      <div class="card-social-media">
        <div class="social-media-item">
          <a :href="team.linkedin" target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        <div class="social-media-item">
          <a :href="team.github" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </div>
        <div class="social-media-item">
          <a :href="team.instagram" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="card-image-left">
      <img :src="team.image" alt="Team Image" />
    </div>
  </div>
  <!-- End Left Team -->
</template>

<script>
export default {
  name: "great-team-member",
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.great-team-card {
  margin: 2rem 0;
  align-items: center;
  display: flex;

  .card-image-left {
    width: 50%;
    img {
      clip-path: polygon(100% 0%, 100% 75%, 0% 100%, 0% 25%);
    }
  }

  .card-image-right {
    width: 50%;
    img {
      clip-path: polygon(100% 25%, 100% 100%, 0 75%, 0 0);
    }
  }

  .card-desc-wrapper-right {
    margin-right: 4rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .card-desc-wrapper-left {
    margin-left: 4rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .card-name {
    font-size: 3.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $dark;
  }

  .card-job {
    color: $duff-blue;
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .card-info {
    font-size: 1.4rem;
    text-align: justify;
    line-height: 2.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .card-social-media {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: 40%;

    .social-media-item {
      transform: rotate(45deg);
      cursor: pointer;
      // border-radius: 50%;
      border: 1px solid $light-blue;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      transition: background-color 1s;

      &:hover {
        background-color: $duff-blue;
        i {
          color: $light-gray;
        }
      }

      a {
        i {
          transform: rotate(-45deg);
          color: $duff-blue;
          font-size: 2.5rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .great-team-card {
    flex-wrap: wrap;

    .card-image-left {
      flex: 1;
      min-width: 200px;
    }

    .card-image-right {
      flex: 1;
      min-width: 200px;
    }

    .card-desc-wrapper-right {
      margin-right: 2.8rem;
      flex: 1;
      min-width: 200px;

      .card-name {
        font-size: 2.8rem;
      }

      .card-job {
        font-size: 2rem;
      }

      .card-info {
        font-size: 1.4rem;
      }
    }

    .card-desc-wrapper-left {
      margin-left: 2.8rem;
      flex: 1;
      min-width: 200px;

      .card-name {
        font-size: 2.8rem;
      }

      .card-job {
        font-size: 2rem;
      }

      .card-info {
        font-size: 1.4rem;
      }
    }

    .card-social-media {
      display: flex;
      justify-content: flex-start;
      width: 100%;

      .social-media-item {
        margin-top: 2rem;
        margin-right: 2.8rem;
      }
    }
  }
}

// Ipad
@media only screen and (max-width: 768px) {
  .great-team-card {
    .card-desc-wrapper-right {
      margin-right: 2rem;
      flex: 1.3;

      .card-name {
        font-size: 2.2rem;
      }

      .card-job {
        font-size: 2rem;
      }

      .card-info {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }

    .card-desc-wrapper-left {
      margin-left: 2rem;
      flex: 1.3;

      .card-name {
        font-size: 2.2rem;
      }

      .card-job {
        font-size: 2rem;
      }

      .card-info {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }

    .card-social-media {
      .social-media-item {
        margin-top: 2rem;
        margin-right: 2.8rem;
        width: 4rem;
        height: 4rem;
        a {
          i {
            font-size: 2.2rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 425px) {
  .great-team-card {
    margin: 4rem 0;
  }
  .column-reverse {
    flex-direction: column-reverse;
    .card-image-left {
      width: 100%;
      margin-bottom: 2rem;
    }
    .card-desc-wrapper-right {
      width: 100%;
      margin: 0;
    }
  }

  .card-info {
    line-height: 2rem !important;
  }

  .card-image-right {
    margin-bottom: 2rem;
  }

  .card-desc-wrapper-left {
    align-items: flex-start !important;
    margin: 0 !important;
  }
}
</style>
