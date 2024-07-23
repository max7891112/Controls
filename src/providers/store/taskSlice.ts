import { createSlice } from "@reduxjs/toolkit/react";
import { v1 } from "uuid";
import { RootState } from "./store";
import {
  AddTaskType,
  CancelTaskType,
  EditTaskType,
  DeleteTaskType,
  CompleteCheckType,
  TaskType,
} from "../../interface/interface";

const initialState: TaskType[] = [
  {
    id: v1(),
    title: "Sport",
    description: "Run",
    long: [false, false],
    editMode: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    finishAddTask(state, action: AddTaskType) {
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
    cancelTask(state, action: CancelTaskType) {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          task.editMode = false;
        }
        return task;
      });
      // return state;
    },
    editTask(state, action: EditTaskType) {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, editMode: !task.editMode };
        }

        return task;
      });
      console.log(state[0].long);

      return state;
    },
    deleteTask(state, action: DeleteTaskType) {
      state = state.filter((task) => {
        return task.id !== action.payload.id;
      });
      return state;
    },
    completeCheck(state, action: CompleteCheckType) {
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
} = taskSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default taskSlice.reducer;
