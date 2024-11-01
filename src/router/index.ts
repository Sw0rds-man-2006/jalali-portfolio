import { createRouter, createWebHistory } from "vue-router";
import about from "../views/about.vue";
import home from "../views/home.vue";
import blog from "../views/blog.vue";
import contact from "../views/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/blog",
      name: "blog",
      component: blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
  ],
});

export default router;
