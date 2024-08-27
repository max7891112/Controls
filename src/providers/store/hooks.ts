import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import { useEffect } from "react";
import {
  updateDay,
  updateMonth,
  updateYear,
} from "../../providers/store/slices/currentDataSlice";
import { sendPercantage } from "../../providers/store/slices/monthSlice";
import { getOffsetWeekday } from "../../utils/dataMonthTransformation";
import { sendPercantageYear } from "../../providers/store/slices/yearSlice";
import { summaryPersantageMonth } from "../../utils/dataYearTransformation";
import { summaryPersantageYear } from "../../utils/dataLifeTransformation";
import { sendPercantageLife } from "../../providers/store/slices/lifeSlice";
import { getPercentage } from "../../utils/transformDataLong";

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

export const useUpdateStorage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (
      localStorage.getItem("today") !== new Date().getDate().toString() &&
      localStorage.getItem("today") !== null
    ) {
      localStorage.setItem("today", new Date().getDate().toString());
      dispatch(updateDay());
    }
    if (localStorage.getItem("today") === null) {
      localStorage.setItem("today", new Date().getDate().toString());
    }
    if (
      localStorage.getItem("month") !== new Date().getMonth().toString() &&
      localStorage.getItem("month") !== null
    ) {
      localStorage.setItem("month", new Date().getMonth().toString());
      dispatch(updateMonth());
    }
    if (localStorage.getItem("month") === null) {
      localStorage.setItem("month", new Date().getDate().toString());
    }
    if (
      localStorage.getItem("year") !== new Date().getFullYear().toString() &&
      localStorage.getItem("year") !== null
    ) {
      localStorage.setItem("year", new Date().getFullYear().toString());
      dispatch(updateYear());
    }
    if (localStorage.getItem("year") === null) {
      localStorage.setItem("year", new Date().getDate().toString());
    }
  }, []);
};

export const useSendPersantage = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const currentData = useAppSelector((state) => state.currentData);
  const month = useAppSelector((state) => state.month);
  const year = useAppSelector((state) => state.year);
  const percantage = getPercentage(tasks) ? getPercentage(tasks) : 0;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      sendPercantage({
        index: currentData.day + getOffsetWeekday(),
        percantage: percantage,
      })
    );
    dispatch(
      sendPercantageYear({
        index: currentData.month,
        percantage: summaryPersantageMonth(month),
      })
    );
    dispatch(
      sendPercantageLife({
        index: currentData.year,
        percantage: summaryPersantageYear(year),
        birthday: 1998,
      })
    );
  }, [
    percantage,
    summaryPersantageMonth(month), // correct this
    summaryPersantageYear(year), // correct this
    currentData.day,
    currentData.month,
    currentData.year,
  ]);

  return percantage;
};
