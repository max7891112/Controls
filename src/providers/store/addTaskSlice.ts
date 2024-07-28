import { createSlice } from "@reduxjs/toolkit/react";
// import { RootState } from "./store";

const initialState = { isAddTask: false };

const addTaskSlice = createSlice({
  name: "isAddTask",
  initialState,
  reducers: {
    addTask: (state) => {
      state.isAddTask = !state.isAddTask;
      return state;
    },
    removeAddTask: (state) => {
      state.isAddTask = false;
      return state;
    },
  },
});

export const { addTask, removeAddTask } = addTaskSlice.actions;

// export const selectCount = (state: RootState) => state.tasks;

export default addTaskSlice.reducer;
