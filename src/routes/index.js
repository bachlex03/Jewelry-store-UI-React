import { Home, Shop, Cart, Details } from "~/pages";
import { HomeLayout } from "~/layouts";

export const publicRoutes = [
  {
    path: "/home",
    component: Home,
    layout: HomeLayout,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/Details",
    component: Details,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    element: Home,
  },
];
