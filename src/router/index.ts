import { createRouter, createWebHashHistory } from "vue-router";
import about from "../views/about.vue";
import home from "../views/home.vue";
import blog from "../views/blog.vue";
import contact from "../views/contact.vue";
import blogcontent from "@/views/blogcontent.vue";
import Pagenotfound from "@/views/Pagenotfound.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: "/blog/:id",
      beforeEnter(to, from, next) {
        if (+to.params.id > 3) {
          next("/error");
        } else {
          next();
        }
      },
      component: blogcontent,
    },
    {
      path: "/:catchall(.*)*",
      name: "PageNotFound",
      component: Pagenotfound,
    },
  ],
});

export default router;
// {
//   path: '/',
//   name: 'home',
//   component: HomeView
// }
