import { createSlice } from "@reduxjs/toolkit/react";
import { createDataYear } from "../../../utils/dataYearTransformation";
import { sendPercantageType } from "../../../interface/interface";

const getYearData = () => {
  const yearDataStr = localStorage.getItem("yearData");
  const yearData: number[][] = yearDataStr
    ? JSON.parse(yearDataStr)
    : createDataYear();
  return yearData;
};

const initialState = getYearData();

const yearSlice = createSlice({
  name: "year",
  initialState,
  reducers: {
    sendPercantageYear(state, action: sendPercantageType) {
      state = state.map((month, index) => {
        if (index === action.payload.index) {
          month = [month[0], action.payload.percantage];
        }
        return month;
      });
      return state;
    },
  },
});

export const { sendPercantageYear } = yearSlice.actions;
export default yearSlice.reducer;
