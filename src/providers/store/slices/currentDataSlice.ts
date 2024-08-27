import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const currentData = createSlice({
  name: "currentData",
  initialState,
  reducers: {
    updateDay(state) {
      state.day = new Date().getDate();
      return state;
    },
    updateMonth(state) {
      state.month = new Date().getMonth();
      return state;
    },
    updateYear(state) {
      state.year = new Date().getFullYear();
      return state;
    },
  },
});

export const { updateDay, updateMonth, updateYear } = currentData.actions;
export default currentData.reducer;
