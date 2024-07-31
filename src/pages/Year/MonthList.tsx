import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import { useAppSelector } from "../../providers/store/hooks";
const yearTitle = (month: number) => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][month];
};
export const YearList = () => {
  const year = useAppSelector((state) => state.year);
  return (
    <div className="month_container">
      {year.map(([month, percentage]: number[]) => (
        <div className="month_item" key={v1()}>
          <h3 className="month_day">{yearTitle(month)}</h3>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className="main-progressbar"
          />
        </div>
      ))}
    </div>
  );
};
