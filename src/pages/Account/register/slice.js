import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: {},
    token: "",
  },
  //actions
  reducers: {
    updateVal: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});
export const { updateVal } = registerSlice.actions;

export default registerSlice.reducer;
