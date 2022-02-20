import { createSlice } from "@reduxjs/toolkit";
import { routingSlice } from "./RoutingSlice";

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;

export const selectAuthStatus = (state) => state.auth.loggedIn;

export default routingSlice.reducer;
