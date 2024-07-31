import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./taskSlice";
import addTaskReducer from "./addTaskSlice";
import monthReducer from "./monthSlice";
import currentDataReducer from "./currentDataSlice";
import yearReducer from "./yearSlice";
import lifeReducer from "./lifeSlice";

export const store = configureStore({
  reducer: {
    tasks: controlReducer,
    isAddTask: addTaskReducer,
    month: monthReducer,
    year: yearReducer,
    life: lifeReducer,
    currentData: currentDataReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
