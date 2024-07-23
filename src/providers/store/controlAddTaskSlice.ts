import { createSlice } from "@reduxjs/toolkit/react";
import { RootState } from "./store";

const initialState = { isAddTask: false };

const controlAddTaskSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    addTask: (state) => {
      console.log("addTask");
      state.isAddTask = !state.isAddTask;
      return state;
    },
    removeAddTask: (state) => {
      console.log("removeAddTask");
      state.isAddTask = false;
      return state;
    },
  },
});

export const { addTask, removeAddTask } = controlAddTaskSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default controlAddTaskSlice.reducer;
