import { Home, Shop, Cart } from "~/pages";
import { SubLayout } from "~/layouts";

export const publicRoutes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/cart",
    component: Cart,
    layout: SubLayout,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    element: Home,
  },
];
