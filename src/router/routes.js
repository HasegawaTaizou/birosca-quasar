import ErrorNotFoundVue from "pages/ErrorNotFound.vue";

const routes = [
  {
    path: "/",
    component: () => import("src/pages/MainLayout.vue"),
  },
  {
    path: "/",
    component: () => import("src/pages/MainLayout.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    name: "ErrorNotFound",
    component: ErrorNotFoundVue,
  },
];

export default routes;
