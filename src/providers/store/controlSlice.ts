import { createSlice } from "@reduxjs/toolkit/react";
import { v1 } from "uuid";
import { RootState } from "./store";

const initialState = [
  {
    id: v1(),
    title: "Sport",
    description: "Run",
    long: [false, false],
    editMode: false,
  },
];

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    finishAddTask(state, action) {
      if (action.payload.editMode) {
        state = state.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              title: action.payload.title,
              description: action.payload.description,
              long: action.payload.long,
              editMode: false,
            };
          }
          return task;
        });
        return state;
      } else {
        state = [
          ...state,
          {
            id: v1(),
            title: action.payload.title,
            description: action.payload.description,
            long: action.payload.long,
            editMode: false,
          },
        ];
        return state;
      }
    },
    cancelTask(state, action) {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          task.editMode = false;
        }
        return task;
      });
      // return state;
    },
    editTask(state, action) {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, editMode: !task.editMode };
        }
        return task;
      });
      return state;
    },
    deleteTask(state, action) {
      state = state.filter((task) => {
        return task.id !== action.payload.id;
      });
      return state;
    },
    completeCheck(state, action) {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            long: task.long.map((item, index) =>
              index === action.payload.checkboxIndex ? !item : item
            ),
          };
        }
        return task;
      });
      return state;
    },
  },
});

export const {
  finishAddTask,
  cancelTask,
  editTask,
  deleteTask,
  completeCheck,
} = controlSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default controlSlice.reducer;
