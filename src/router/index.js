import { createRouter, createWebHistory } from "vue-router";
import Top from "../components/Top.vue";
import Home from "../components/Home.vue";  
import About from "../components/About.vue";
import Single from "../components/Single.vue";

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
    {
      path: "/page",
      name: "Home",
      component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/page/:id?",
        name: "page",
        component: Single,
        props: true
      },
  ];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;