import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.order = { ...payload };
    },
  },
});
export const { addOrder } = orderSlice.actions;
