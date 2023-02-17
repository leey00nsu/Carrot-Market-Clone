import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogin: false, username: null },
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.username = action.payload.username;
    },
    logout(state, action) {
      state.isLogin = false;
      state.username = null;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
