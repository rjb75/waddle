import { createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "../../pages/PageEnums";

const initialState = {
  page: Dashboard,
  prevPage: Dashboard, // both will be set as Dashboard for now, could set prevPage as 'null' if needed, but this keeps it simple when it comes to referring to previous state until user changes pages.
};

export const routingSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    setPage: (state, action) => {   // Updates the current page, and saves it (prior to update) as the previous page
      state.prevPage = state.page;
      state.page = action.payload;
    },
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    }
  }
});

export const { setPage, setNickname, setEmail } = routingSlice.actions;


// Selectors for current and previous page
export const selectPage = (state) => state.routing.page;
export const selectPrevPage = (state) => state.routing.prevPage;

export default routingSlice.reducer;
