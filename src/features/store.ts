import { configureStore } from "@reduxjs/toolkit";

import productsFetch from "./produtsSlice";
import cartSlice from './cartSlice'
const store = configureStore({
  reducer:{
    products:productsFetch,
    cart: cartSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
