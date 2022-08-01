import { configureStore } from "@reduxjs/toolkit";
import { registerReducer, loginReducer } from "./pages/Account";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});
