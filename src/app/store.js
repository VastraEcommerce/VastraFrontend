import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from '../services/productApi';
import { usersApi } from '../services/usersApi';
import { registerReducer, loginReducer } from './../pages/Account';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    register: registerReducer,
    login: loginReducer,
  },
<<<<<<< HEAD
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( productApi.middleware ).concat( usersApi.middleware )

} );
=======
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
>>>>>>> 1de879a298969d41bde2e9820f15562e48218fc6

// Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
