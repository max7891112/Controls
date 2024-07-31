import "./year.css";
import { useSaveStorage } from "../../providers/store/hooks";
import { YearList } from "./MonthList";
import { NavigationArrow } from "../../ui/NavigationArrow";

export const Year = (): JSX.Element => {
  useSaveStorage();
  return (
    <div className="month">
      <h2>{new Date().getFullYear()}</h2>
      <YearList />
      <NavigationArrow selector="year" />
    </div>
  );
};
