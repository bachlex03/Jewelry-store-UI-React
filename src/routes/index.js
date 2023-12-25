import {
  Home,
  Shop,
  Cart,
  Checkout,
  Details,
  Login,
  Register,
  Otp,
} from "~/pages";
import { HomeLayout, CustomerLayout } from "~/layouts";

import { Address, Order, Detail, Wishlist, Dashboard } from "~/pages/Customer";

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
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/otp",
    component: Otp,
  },
  {
    path: "/customer/dashboard",
    component: Dashboard,
    layout: CustomerLayout,
  },
  {
    path: "/customer/orders",
    component: Order,
    layout: CustomerLayout,
  },
  {
    path: "/customer/addresses",
    component: Address,
    layout: CustomerLayout,
  },
  {
    path: "/customer/details",
    component: Detail,
    layout: CustomerLayout,
  },
  {
    path: "/customer/wishlist",
    component: Wishlist,
    layout: CustomerLayout,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    element: Home,
  },
];
