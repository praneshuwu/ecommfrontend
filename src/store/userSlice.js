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
      state.isError = null;
      state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,logoutAndRemoveToken} =
  userSlice.actions;
export default userSlice.reducer;
