import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    token: "",
  },
  //actions
  reducers: {
    updateValue: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});
export const { updateValue } = loginSlice.actions;

export default loginSlice.reducer;
