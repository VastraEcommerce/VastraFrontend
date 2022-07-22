import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import { vastraApi } from "./services/products";

export const store = configureStore({
    reducer: {
        product: productReducer,
        [vastraApi.reducerPath]: vastraApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vastraApi.middleware),
});
