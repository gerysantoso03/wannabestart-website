<template>
  <footer class="footer">
    <h4 class="footer-title">
      WannaBeStart
    </h4>
    <div class="footer-top-info-wrapper">
      <div class="footer-contact-wrapper">
        <a :href="email" target="_blank" class="contact-item">
          <i class="far fa-envelope"></i>wannabstart2020@gmail.com
        </a>
        <a :href="instagram" target="_blank" class="contact-item">
          <i class="fab fa-instagram"></i>wannabestart
        </a>
        <a :href="wa" target="_blank" class="contact-item">
          <i class="fab fa-whatsapp"></i>0878-8780-0489
        </a>
      </div>
      <div class="footer-logo">
        <img :src="footerLogo" alt="WBS Logo" />
      </div>
    </div>
    <div class="footer-bottom-info-wrapper">
      <p class="copyright">
        <i class="far fa-copyright"></i> 2021 WannaBeStart. All Right Reserved
      </p>
      <!-- Copyright for dekstop -->
      <p class="copyright-tablet">
        <i class="far fa-copyright"></i> 2021 WannaBeStart
      </p>
      <!-- Copyright for tablet -->
      <p class="love">Made with <i class="fas fa-heart"></i> by WannaBeStart</p>
      <div @click="toTop" class="to-top">
        <i class="fas fa-caret-up"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerLogo: require("../../assets/images/LogoWBS.png"),
      email:
        "mailto:wannabstart2020@gmail.com?subject=Permintaan Jasa WannaBeStart",
      instagram: "https://www.instagram.com/wannabestart/",
      wa:
        "https://wa.me/6287887800489?text=Hello WannaBeStart i want to build a project :)",
    };
  },
  methods: {
    toTop(){
      document.documentElement.scrollTop = 0;
    },
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
.footer {
  padding: 1.5rem 6rem;
  background-color: $dark-blue;

  .footer-title {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: $light-gray;
  }

  .footer-top-info-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid $light-gray;
    padding-bottom: 0.8rem;

    .footer-logo {
      width: 10%;
    }

    .footer-contact-wrapper {
      display: flex;
      flex-direction: column;

      .contact-item:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      .contact-item {
        color: $light-gray;
        transition: color 0.4s;
        font-weight: 500;

        &:hover {
          color: $light-blue;
        }

        i {
          margin-right: 0.8rem;
        }
      }
    }
  }

  .footer-bottom-info-wrapper {
    display: flex;
    align-items: center;
    padding-top: 0.8rem;

    .copyright {
      color: $light-gray;
      font-size: 1.6rem;
      flex: 0 0 40%;
    }

    .copyright-tablet {
      display: none;
      color: $light-gray;
      font-size: 1.6rem;
      flex: 0 0 40%;
    }

    .love {
      color: $light-gray;
      font-size: 1.6rem;
      flex: 0 0 50%;

      i {
        color: $light-blue;
      }
    }

    .to-top {
      flex: 0 0 10%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      i {
        font-size: 2.5rem;
        color: $light-gray;
        transition: color 0.4s;
        cursor: pointer;

        &:hover {
          color: $light-blue;
        }
      }
    }
  }
}

/* Media query - Tablet styles */
@media (min-width: $tablet-width) and (max-width: $dekstop-width) {
  .footer {
    .footer-bottom-info-wrapper {
      .copyright {
        display: none;
      }
      .copyright-tablet {
        display: block;
      }
    }
  }
}

/* Media query - Mobile styles */
@media (max-width: $tablet-width) {
  .footer {
    padding: 3rem;
    .footer-top-info-wrapper {
      .footer-logo {
        display: none;
      }
    }

    .footer-bottom-info-wrapper {
      .copyright {
        display: none;
      }

      .copyright-tablet {
        display: block;
        flex: 0 0 50%;
      }
      .love {
        display: none;
      }
      .to-top {
        flex: 0 0 50%;
      }
    }
  }
}
</style>
