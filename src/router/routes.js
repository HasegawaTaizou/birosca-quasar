const MainLayoutVue = () => import("src/pages/MainLayout.vue");

//Dashboard
const Dashboard = () => import("src/pages/dashboard/Dashboard.vue");
const Foods = () => import("src/pages/dashboard/Foods.vue");
const Orders = () => import("src/pages/dashboard/Orders.vue");

//Catch All
const ErrorNotFoundVue = () => import("pages/ErrorNotFound.vue");

const routes = [
  {
    path: "/",
    component: MainLayoutVue,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "foods",
        component: Foods,
      },
      {
        path: "orders",
        component: Orders,
      },
    ],
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
