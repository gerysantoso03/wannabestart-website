<template>
  <section class="our-services">
    <h4 class="our-services-title"><span>We</span> Specialise In</h4>
    <div class="our-services-wrapper">
      <div class="services-image">
        <img :src="image" alt="Services Image" />
      </div>
      <div class="services-info-wrapper">
        <div
          class="service-info"
          v-for="service in services"
          :key="service.title"
        >
          <div class="service-logo">
            <i :class="service.class"></i>
          </div>
          <div class="services-desc-wrapper">
            <p class="service-title">
              {{ service.title }}
            </p>
            <p class="service-desc">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "our-services",
  data() {
    return {
      image: require("../../assets/images/services.png"),
      services: [
        {
          title: "Website Development",
          desc:
            " Building website, Develop website, Functionality optimization,Prototyping, User-friendly website",
          class: "fas fa-laptop-code",
        },
        {
          title: "Mobile Development",
          desc:
            " Building website, Develop website, Functionality optimization,Prototyping, User-friendly website",
          class: "fas fa-mobile",
        },
        {
          title: "UI/UX Design",
          desc:
            " Building website, Develop website, Functionality optimization,Prototyping, User-friendly website",
          class: "fab fa-uikit",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.our-services-title {
  font-size: 3rem;
  margin-bottom: 2rem;

  span {
    color: $duff-blue;
  }
}

.our-services-wrapper {
  display: flex;

  .services-image {
    width: 50%;
  }

  .services-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;

    .service-info {
      display: flex;
      border: 2px dashed $dark-blue;
      padding: 2rem 0;
      border-radius: 2rem;
      cursor: pointer;
      transition: border 0.5s;

      &:hover {
        border: 2px solid $light-blue;

        .service-logo {
          i {
            color: $light-blue;
          }
        }
      }

      .service-logo {
        border-radius: 2rem 0 0 2rem;
        flex: 0 0 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        i {
          font-size: 4rem;
          transition: color 0.5s;
          color: $duff-blue;
        }
      }

      .services-desc-wrapper {
        .service-title {
          margin-bottom: 1rem;
          font-size: 2rem;
          letter-spacing: 1px;
          font-weight: 700;
          color: $duff-blue;
        }

        .service-desc {
          font-size: 1.6rem;
          font-weight: 700;
          color: $dark-blue;
        }
      }
    }
  }
}

/* Media query - Tablet styles */
@media (min-width: $tablet-width) and (max-width: $dekstop-width) {
  .our-services-wrapper {
    .services-image {
      display: none;
    }

    .services-info-wrapper {
      width: 100%;
      .service-info {
        margin-bottom: 2rem;
      }
      .service-info:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: $tablet-width) {
  .our-services-title {
    text-align: center;
  }
  .our-services-wrapper {
    .services-image {
      display: none;
    }

    .services-info-wrapper {
      width: 100%;
      .service-info {
        margin-bottom: 2rem;
      }
      .service-info:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
