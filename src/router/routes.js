import MainLayoutVue from "src/pages/MainLayout.vue";

//Dashboard
import Dashboard from "src/pages/dashboard/Dashboard.vue";

//Catch All
import ErrorNotFoundVue from "pages/ErrorNotFound.vue";

const routes = [
  {
    path: "/",
    component: MainLayoutVue,
  },
  {
    path: "/dashboard",
    component: Dashboard,
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
