<template>
  <section class="timeline">
    <h4 class="timeline-title"><span>WannaBeStart</span> Timeline</h4>
    <h4 class="timeline-postitle">
      Let's dive together the journey of <span>WannaBeStart</span>
    </h4>
    <div class="timeline-display">
      <div class="timeline-wrapper">
        <ul>
          <li v-for="timeline in timelines" :key="timeline.title">
            <div class="timeline-content">
              <h4 class="timeline-card-date">{{ timeline.date }}</h4>
              <h4 class="timeline-card-title">{{ timeline.title }}</h4>
              <p class="timeline-card-desc">
                {{ timeline.desc }}
              </p>
            </div>
          </li>
          <!-- End of li -->
        </ul>
        <!-- End of ul -->
      </div>
      <!-- End of timeline-wrapper -->
    </div>
    <!-- End of timeline-display -->
  </section>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      timelines: [
        {
          title: "WannaBeStart Literally Started!",
          date: "3 June 2020",
          desc:
            "In the beginning, we create this organization only to learn something new in Web Development. Who knows it will become a company?",
        },
        {
          title: "First Project!",
          date: "7 August 2020",
          desc:
            "First month of creating this organizations, we got our first project! We modify Nisuma Paper's website to become more modern and exudes a youthful aura.",
        },
        {
          title: "Onihat Created!",
          date: "3 September 2020",
          desc:
            "Our first cross-platform project! You can see the detail of Onihat in our projects page. Sneak peek, it got a mobile version too! B-). Oh, and our member Gery is having a birthday in this date. Happy Birthday Gery!",
        },
        {
          title: "New Member!",
          date: "23 November 2020",
          desc:
            "WBS got some new members! In the beginning we only had 4 members, turns into 9 members! Such an improvement right?",
        },
        {
          title: "Second Project!",
          date: "11 Januari 2021",
          desc:
            "Our second project comes from Aero99, a luxury car vehicle showroom. When meeting with them we all look at the luxury cars that are sold by them, what a beautiful sight!",
        },
        {
          title: "Collaboration With Cooking Media",
          date: "25 Juli 2021",
          desc:
            "This is our collaboration project with one of the teams in Skystar Venture Incubation Program, Cooking Media. Our team builds a prototype for their website and Cooking Media provide feedback to our development workflow",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";

.timeline {
  padding: 3rem;
}

.timeline-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  span {
    color: $duff-blue;
  }
}

.timeline-postitle {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  span {
    color: $duff-blue;
  }
}

.timeline-card-title {
  font-size: 2rem;
  color: $duff-blue;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 1rem;
}

.timeline-card-desc {
  font-size: 1.4rem;
  line-height: 3rem;
  font-weight: 300;
}

.timeline-card-date {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.timeline-display {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.timeline-wrapper {
  width: 80%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;

  li {
    cursor: pointer;
    position: relative;
    border-radius: 2rem;
    padding: 2rem;
    background-color: $light-gray;
    margin-bottom: 3rem;
    -webkit-box-shadow: 4px 5px 5px 0px rgba(166, 175, 200, 1);
    -moz-box-shadow: 4px 5px 5px 0px rgba(166, 175, 200, 1);
    box-shadow: 4px 5px 5px 0px rgba(166, 175, 200, 1);
  }
  li:last-child {
    margin-bottom: 0;
  }
}

/* Media query - Table styles */
@media (min-width: $tablet-width) {
  .timeline-card-date {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 1rem;
    position: absolute;
    letter-spacing: 1px;
    top: -3rem;
  }
  .timeline-wrapper {
    width: 80%;
    max-width: 80rem;
    margin: 0 auto;
    position: relative;

    /* Make Line */
    &::before {
      content: "";
      position: absolute;
      width: 3px;
      height: 100%;
      background-color: $light-blue;
      left: 50%;
      transform: translateX(-50%);
    }

    li {
      cursor: pointer;
      position: relative;
      width: 50%;
      padding: 2rem;
      background-color: $light-gray;
      margin-bottom: 3rem;

      /* Make Dot */
      &::after {
        content: "";
        position: absolute;
        height: 2rem;
        width: 2rem;
        background-color: $duff-blue;
        border-radius: 50%;
        top: 0;
        transition: background-color 0.5s;
      }

      &:hover::after {
        background-color: $light-blue;
      }
    }

    li:nth-child(odd) {
      float: left;
      clear: right;
      border-radius: 2rem 0 2rem 2rem;
      transform: translateX(-3rem);
      -webkit-box-shadow: -4px 4px 10px 0px rgba(166, 175, 200, 1);
      -moz-box-shadow: -4px 4px 10px 0px rgba(166, 175, 200, 1);
      box-shadow: -4px 4px 10px 0px rgba(166, 175, 200, 1);
      &::after {
        right: -3rem;
        transform: translate(50%, -50%);
      }
    }

    li:nth-child(even) {
      float: right;
      clear: left;
      border-radius: 0 2rem 2rem 2rem;
      transform: translateX(3rem);
      -webkit-box-shadow: 4px 4px 10px 0px rgba(166, 175, 200, 1);
      -moz-box-shadow: 4px 4px 10px 0px rgba(166, 175, 200, 1);
      box-shadow: 4px 4px 10px 0px rgba(166, 175, 200, 1);
      &::after {
        left: -3rem;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
