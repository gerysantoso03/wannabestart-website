import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import OurGreatTeam from "../views/OurGreatTeam.vue";
import AboutUs from "../views/AboutUs.vue";
import CustomerStory from "../views/CustomerStory.vue";
import Projects from "../views/Projects.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/our-great-team",
    name: "OurGreatTeam",
    component: OurGreatTeam,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/customer-story",
    name: "CustomerStory",
    component: CustomerStory,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  // Catchall 404
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
