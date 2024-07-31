import { CircularProgressbar } from "react-circular-progressbar";
import { v1 } from "uuid";
import { useAppSelector } from "../../providers/store/hooks";

export const LifeList = () => {
  const life = useAppSelector((state) => state.life);
  return (
    <div className="month_container">
      {life.map(([year, percentage]: number[]) => (
        <div className="month_item" key={v1()}>
          <h3 className="month_day">{year}</h3>
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
