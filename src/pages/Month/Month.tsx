import "./month.css";
import { getFullMonth } from "../../utils/dataMonthTransformation";
import { useSaveStorage } from "../../providers/store/hooks";
import { DayList } from "./DayList";
import { NavigationArrow } from "../../ui/NavigationArrow";

export const Month = (): JSX.Element => {
  useSaveStorage();
  return (
    <div className="month">
      <h2>{getFullMonth(new Date().getMonth())}</h2>
      <DayList />
      <NavigationArrow selector="month" />
    </div>
  );
};
