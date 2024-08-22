import { createSlice } from "@reduxjs/toolkit/react";
import { getIndex, data } from "../../../utils/dataMonthTransformation";
import { sendPercantageType } from "../../../interface/interface";

data.unshift(...getIndex());
const getMonthData = () => {
  const monthDataStr = localStorage.getItem("monthData");
  const monthData: number[][] = monthDataStr ? JSON.parse(monthDataStr) : data;
  return monthData;
};

const initialState = getMonthData();

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    sendPercantage(state, action: sendPercantageType) {
      state = state.map((day, index) => {
        if (index + 1 === action.payload.index) {
          day = [day[0], day[1], action.payload.percantage];
        }
        return day;
      });
      return state;
    },
  },
});

export const { sendPercantage } = monthSlice.actions;
export default monthSlice.reducer;
