import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  //actions
  reducers: {
    updateValue: (state, { payload: { val, key } }) => {
      state[key] = val;
    },
  },
});
export const { updateValue } = loginSlice.actions;

export default loginSlice.reducer;
