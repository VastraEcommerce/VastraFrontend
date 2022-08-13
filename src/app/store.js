import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "../features/auth/authSlice";
import { productApi } from "../services/productApi";
import { cartSlice } from "./features/cartSlice";
import { orderSlice } from "./features/orderSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    shoppingBag: cartSlice.reducer,
    order: orderSlice.reducer,

    // register: registerReducer,
    // login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
