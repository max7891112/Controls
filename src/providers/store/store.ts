import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./controlSlice";
import addTaskReducer from "./controlAddTaskSlice";
// import controlTaskReducer from "./controlAddTaskSlice";

export const store = configureStore({
  reducer: { tasks: controlReducer, isAddTask: addTaskReducer },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
