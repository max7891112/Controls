import "./month.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Month = (): JSX.Element => {
  const getCountDays = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const date1 = new Date(currentYear, currentMonth, 1);
    const date2 = new Date(currentYear, currentMonth + 1, 1);

    const countDays = Math.ceil(
      (date2.getTime() - date1.getTime()) / 1000 / 3600 / 24
    );
    return countDays;
  };

  const getFirstDay = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const date1 = new Date(currentYear, currentMonth, 1);
    return date1.getDay();
  };

  const getIndexDay = (i: number) => {
    return getFirstDay() + i - 1 > 6
      ? (getFirstDay() + i - 1) % 7
      : getFirstDay() + i - 1;
  };
  const getIndex = () => {
    const arr = [];
    if (getFirstDay() > 1) {
      for (let i = 1; i < getFirstDay(); i++) {
        arr.push([0, -1, 0]);
      }
    }
    if (getFirstDay() === 0) {
      for (let i = 0; i < 6; i++) {
        arr.push([0, -1, 0]);
      }
    }
    return arr;
  };

  const createData = () => {
    const dataArr: number[][] = [];
    for (let i = 1; i < getCountDays() + 1; i++) {
      dataArr.push([i, getIndexDay(i), 0]);
    }
    return dataArr;
  };

  const data = createData();
  data.unshift(...getIndex());
  const [monthStat, setMonthStat] = useState(data);
  const getFullMonth = (month: number) => {
    return {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    }[month];
  };
  return (
    <div className="month">
      <h2>{getFullMonth(new Date().getMonth())}</h2>
      <div className="month_container">
        {monthStat.map(([day, weekday, percentage]: number[]) =>
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
