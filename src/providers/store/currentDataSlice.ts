import { createSlice } from "@reduxjs/toolkit/react";
import { getCountDays } from "../../utils/dataMonthTransformation";

const initialState = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const currentData = createSlice({
  name: "currentData",
  initialState,
  reducers: {
    incrementDay(state) {
      if (state.day < getCountDays()) {
        state.day = state.day + 1;
        return state;
      } else {
        state.day = 1;
        return state;
      }
    },
    incrementMonth(state) {
      if (state.month < 12) {
        state.month = state.month + 1;
        return state;
      } else {
        state.month = 0;
        return state;
      }
    },
    incrementYear(state) {
      state.year = state.year + 1;
      return state;
    },
  },
});

export const { incrementDay, incrementMonth, incrementYear } =
  currentData.actions;
export default currentData.reducer;
