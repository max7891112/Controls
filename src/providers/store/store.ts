import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./slices/taskSlice";
import addTaskReducer from "./slices/addTaskSlice";
import monthReducer from "./slices/monthSlice";
import currentDataReducer from "./slices/currentDataSlice";
import yearReducer from "./slices/yearSlice";
import lifeReducer from "./slices/lifeSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    tasks: controlReducer,
    isAddTask: addTaskReducer,
    month: monthReducer,
    year: yearReducer,
    life: lifeReducer,
    currentData: currentDataReducer,
    userData: userReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
