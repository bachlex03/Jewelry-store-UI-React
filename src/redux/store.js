import { createStore } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

import expireInTransform from "redux-persist-transform-expire-in";

const expireIn = 1000 * 60 * 60 * 24; // expire in 1 day
const expirationKey = "expirationKey";
const persistConfigInit = {
  key: "root",
  storage,
};

const persistConfigUser = {
  key: "user",
  storage,
  transforms: [expireInTransform(expireIn, expirationKey, "")],
};

const persistConfigCart = {
  key: "cart",
  storage,
  transforms: [expireInTransform(expireIn, expirationKey, [])],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfigUser, userReducer),
  cart: persistReducer(persistConfigCart, cartReducer),
});

const persistedReducer = persistReducer(persistConfigInit, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
