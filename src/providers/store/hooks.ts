import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import { useEffect } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
export const useSaveStorage = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const monthData = useAppSelector((state) => state.month);
  const yearData = useAppSelector((state) => state.year);
  const lifeData = useAppSelector((state) => state.life);
  useEffect(() => {
    const onUnload = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("monthData", JSON.stringify(monthData));
      localStorage.setItem("yearData", JSON.stringify(yearData));
      localStorage.setItem("lifeData", JSON.stringify(lifeData));
    };
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [tasks, monthData, yearData, lifeData]);
};

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.userData);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
