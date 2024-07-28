import "./App.scss";
import { Avatar } from "@mui/material";
import { TasksList } from "../App/TasksList";
import { NewTask } from "./NewTask";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getPercentage } from "../../utils/transformDataLong";
import { useAppSelector } from "../../providers/store/hooks";
import { Arrow } from "../../ui/Arrow";
import { useEffect } from "react";
import { sendPercantage } from "../../providers/store/monthSlice";
import { getOffsetWeekday } from "../../utils/dataTransformation";
import { RootState } from "../../providers/store/store";
import { useAppDispatch } from "../../providers/store/hooks";

export function App() {
  const tasks = useAppSelector((state) => state.tasks);
  const monthData = useAppSelector((state) => state.month);
  const percantage = getPercentage(tasks) ? getPercentage(tasks) : 0;

  useEffect(() => {
    const onUnload = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("monthData", JSON.stringify(monthData));
    };
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [tasks, monthData]);

  const countDay = useAppSelector((state: RootState) => state.newDay);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      sendPercantage({
        index: countDay + getOffsetWeekday(),
        percantage: percantage,
      })
    );
  }, [percantage]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="header_title">Every day affairs</h1>
        <div className="header_logo-container">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <p className="header_logo-name">Max</p>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <h2 className="main-today">Today</h2>
          <TasksList />
          <NewTask />
        </div>
      </div>
      <div className="footer">
        <CircularProgressbar
          value={percantage}
          text={`${percantage}%`}
          className="main-progressbar"
        />
        <Arrow className="main-svg" way="month" />
      </div>
    </div>
  );
}

export default App;
