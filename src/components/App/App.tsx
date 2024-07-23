import "./App.scss";
import { Avatar } from "@mui/material";
import { TasksList } from "../App/TasksList";
import { NewTask } from "./NewTask";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getPercentage } from "../../utils/transformDataLong";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/store/hooks";
import { sendPercantage } from "../../providers/store/monthSlice";

export function App() {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const allTaskLong = getPercentage(tasks) ? getPercentage(tasks) : 0;

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
          value={allTaskLong}
          text={`${allTaskLong}%`}
          className="main-progressbar"
        />
        <Link
          to="month"
          onClick={() => {
            dispatch(sendPercantage({ percantage: allTaskLong, index: 23 }));
          }}
        >
          <Tooltip title="month" placement="bottom">
            <svg
              id="Layer_1"
              viewBox="0 0 100 100"
              data-name="Layer 1"
              className="main-svg"
            >
              <path d="m99.12 47.88-26.87-26.88a3 3 0 1 0 -4.25 4.25l21.76 21.75h-86.76a3 3 0 0 0 0 6h86.76l-21.76 21.75a3 3 0 1 0 4.25 4.25l26.87-26.88a3 3 0 0 0 0-4.24z"></path>
            </svg>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
}

export default App;
