import { createSlice } from "@reduxjs/toolkit/react";
// import { RootState } from "./store";
import { getIndex, data } from "../../utils/dataTransformation";

data.unshift(...getIndex());
const getMonthData = () => {
  const monthDataStr = localStorage.getItem("monthData");
  const monthData: number[][] = monthDataStr ? JSON.parse(monthDataStr) : [];
  // console.log(monthData);
  return monthData;
};

const initialState = getMonthData();
type sendPercantageType = {
  payload: {
    percantage: number;
    index: number;
  };
  type: string;
};

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
// export const selectCount = (state: RootState) => state.tasks;
export default monthSlice.reducer;
