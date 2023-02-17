import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogin: false, token: null, refreshToken: null },
  reducers: {
    login(state, action) {
      state.isLogin = true;
    },
    logout(state, action) {
      state.isLogin = false;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
