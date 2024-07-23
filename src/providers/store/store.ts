import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./taskSlice";
import addTaskReducer from "./addTaskSlice";
import monthReducer from "./monthSlice";

export const store = configureStore({
  reducer: {
    tasks: controlReducer,
    isAddTask: addTaskReducer,
    month: monthReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
