import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/productApi";
import { usersApi } from "../services/usersApi";
import { registerReducer, loginReducer } from "./../pages/Account";

export const store = configureStore( {
  reducer: {
    [ productApi.reducerPath ]: productApi.reducer,
    [ usersApi.reducerPath ]: usersApi.reducer,
    register: registerReducer,
    login: loginReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( productApi.middleware )

} );

// Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners( store.dispatch );
