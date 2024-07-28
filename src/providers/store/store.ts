import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./taskSlice";
import addTaskReducer from "./addTaskSlice";
import monthReducer from "./monthSlice";
import newDayReducer from "./newDaySlice";

export const store = configureStore({
  reducer: {
    tasks: controlReducer,
    isAddTask: addTaskReducer,
    month: monthReducer,
    newDay: newDayReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
