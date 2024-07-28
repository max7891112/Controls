import { useEffect } from "react";
import { increment } from "../../providers/store/newDaySlice";
import { useAppDispatch } from "../../providers/store/hooks";
const dispatch = useAppDispatch();
useEffect(() => {
  const onUnload = () => {
    localStorage.setItem("today", new Date().getDate().toString());
  };
  window.addEventListener("beforeunload", onUnload);
  return () => window.removeEventListener("beforeunload", onUnload);
}, []);

useEffect(() => {
  if (localStorage.getItem("today") !== new Date().getDate().toString()) {
    dispatch(increment());
  }
}, []);
