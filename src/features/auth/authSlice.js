import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token:
      (JSON.parse(localStorage.getItem('persist')) &&
        localStorage.getItem('accessToken')) ||
      null,
    persist: JSON.parse(localStorage.getItem('persist')) || false,
  },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    setToken: (state, { payload }) => {
      state.token = payload.token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.persist = false;
    },
    setPersist: (state, action) => {
      state.persist = !state.persist;
    },
  },
});

export const { setCredentials, logOut, setPersist, setToken } =
  authSlice.actions;

export default authSlice;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectPersist = (state) => state.auth.persist;
