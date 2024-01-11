import { createStore } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import expireReducer from "redux-persist-expire";

import cartReducer from "./features/cart/cartSlice";

const persistConfigInit = {
  key: "root",
  storage,
  transform: [expireReducer("expire", { expireSeconds: 5, expiredState: {} })],
};

const persistConfigCart = {
  key: "cart",
  storage,
  whitelist: ["values", "count"],
};

const rootReducer = combineReducers({
  cart: persistReducer(persistConfigCart, cartReducer),
});

const persistedReducer = persistReducer(persistConfigInit, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
