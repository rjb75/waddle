import { createSlice } from "@reduxjs/toolkit";
import { routingSlice } from "./RoutingSlice";

const initialState = {
  loggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
      state.loggedIn = false;
    },
  },
});

export const { setAuthStatus, setToken, logOut } = authSlice.actions;

export const selectAuthStatus = (state) => state.auth.loggedIn;
export const selectToken = (state) => state.auth.token;

export default routingSlice.reducer;
