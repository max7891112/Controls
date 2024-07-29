import { createSlice } from "@reduxjs/toolkit/react";
import { getCountDays } from "../../utils/dataTransformation";

const initialState = new Date().getDate();

const newDay = createSlice({
  name: "newDay",
  initialState,
  reducers: {
    increment(state) {
      if (state < getCountDays()) {
        return state + 1;
      } else {
        return (state = 1);
      }
    },
  },
});

export const { increment } = newDay.actions;
export default newDay.reducer;
