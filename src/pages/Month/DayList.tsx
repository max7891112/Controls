import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import { useAppSelector } from "../../providers/store/hooks";

export const DayList = () => {
  const month = useAppSelector((state) => state.month);
  return (
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
  );
};
