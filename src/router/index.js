import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortalView from "../views/PortalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portal",
      component: PortalView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignUpView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("@/views/ChatView.vue"),
    },
    {
      path: "/device",
      name: "device",
      component: () => import("@/views/DeviceView.vue"),
    },
    {
      path: "/personal-center",
      name: "personalCenter",
      component: () => import("@/views/PersonalCenterView.vue"),
    },
    {
      path: "/measurements",
      name: "measurements",
      component: () => import("@/views/PersonalCenterView.vue"),
    },
    {
      path: "/appointments",
      name: "appointments",
      component:() => import("@/views/AppointmentsView.vue"),
    },
    {
      path:"/test",
      name:"test",
      component: () => import("@/views/SignUpView.vue")
    }
  ],
});

export default router;
