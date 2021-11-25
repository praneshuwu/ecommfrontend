import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
    token: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      state.isError = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    logoutAndRemoveToken: (state) => {
      state.currentUser = null;
      state.isError = false;
      state.token = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload?.username;
      state.isError = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutAndRemoveToken,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
