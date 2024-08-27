import "./App.scss";
import { Avatar } from "@mui/material";
import { TasksList } from "../App/TasksList";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  useSaveStorage,
  useSendPersantage,
  useUpdateStorage,
} from "../../providers/store/hooks";
import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";
import { AddNewTask } from "./AddNewTask";
import { useAppSelector } from "../../providers/store/hooks";
import { NavigationArrow } from "../../ui/NavigationArrow";

export function App() {
  const isAddTask = useAppSelector((state) => state.isAddTask.isAddTask);
  const percantage = useSendPersantage(); // send persantage to month and year
  useUpdateStorage(); // record today and month current data in localStorage
  useSaveStorage(); // record data in localStorage beforeunload app

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
          {isAddTask ? <NewTaskWindow /> : <AddNewTask />}
        </div>
      </div>
      <div className="footer">
        <CircularProgressbar
          value={percantage}
          text={`${percantage}%`}
          className="main-progressbar"
        />
        <NavigationArrow selector="today" />
      </div>
    </div>
  );
}

export default App;
