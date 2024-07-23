import "./month.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { getFullMonth } from "../../utils/dataTransformation";
import { useAppSelector } from "../../providers/store/hooks";

export const Month = (): JSX.Element => {
  const month = useAppSelector((state) => state.month);
  return (
    <div className="month">
      <h2>{getFullMonth(new Date().getMonth())}</h2>
      <div className="month_container">
        {month.map(([day, weekday, percentage]: number[]) =>
          weekday !== -1 ? (
            <div className="month_item" key={v1()}>
              <h3 className="month_day">{day}</h3>
              <p className="month_weekday">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][weekday]}
              </p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className="main-progressbar"
              />
            </div>
          ) : (
            <div className="month_item" key={v1()}></div>
          )
        )}
      </div>
      <Link to="/">
        <Tooltip title="today" placement="bottom">
          <svg
            id="Layer_1"
            viewBox="0 0 100 100"
            data-name="Layer 1"
            className="month-svg"
          >
            <path d="m99.12 47.88-26.87-26.88a3 3 0 1 0 -4.25 4.25l21.76 21.75h-86.76a3 3 0 0 0 0 6h86.76l-21.76 21.75a3 3 0 1 0 4.25 4.25l26.87-26.88a3 3 0 0 0 0-4.24z"></path>
          </svg>
        </Tooltip>
      </Link>
    </div>
  );
};
