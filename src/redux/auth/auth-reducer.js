import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    registerUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutUser(state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.contacts = [];
    },
    currentUser(state, action) {
      console.log("action.payload", action.payload);

      state.user.name = action.payload.name;
      state.user.email = action.payload.email;

      state.isLoggedIn = true;
    },
  },
});

export default authReducer.reducer;
export const { loginUser, registerUser, logoutUser, currentUser } =
  authReducer.actions;
