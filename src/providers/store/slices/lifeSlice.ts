import { createSlice } from "@reduxjs/toolkit/react";
import { createDataLife } from "../../../utils/dataLifeTransformation";
import { sendPercantageLifeType } from "../../../interface/interface";

const getLifeData = (birthday: number) => {
  const lifeDataStr = localStorage.getItem("lifeData");
  const lifeData: number[][] = lifeDataStr
    ? JSON.parse(lifeDataStr)
    : createDataLife(birthday);
  return lifeData;
};

const initialState = getLifeData(1998);

const lifeSlice = createSlice({
  name: "life",
  initialState,
  reducers: {
    sendPercantageLife(state, action: sendPercantageLifeType) {
      state = state.map((year, index) => {
        if (index + action.payload.birthday === action.payload.index) {
          year = [year[0], action.payload.percantage];
        }
        return year;
      });
      return state;
    },
  },
});

export const { sendPercantageLife } = lifeSlice.actions;
export default lifeSlice.reducer;
