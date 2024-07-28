import "./month.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import { getFullMonth } from "../../utils/dataTransformation";
import { useAppSelector } from "../../providers/store/hooks";
import { Arrow } from "../../ui/Arrow";

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
      <Arrow className="month-svg" way="/" />
    </div>
  );
};
