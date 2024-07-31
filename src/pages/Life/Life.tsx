import "./life.css";
import { useSaveStorage } from "../../providers/store/hooks";
import { LifeList } from "./LifeList";
import { NavigationArrow } from "../../ui/NavigationArrow";

export const Life = (): JSX.Element => {
  useSaveStorage();
  return (
    <div className="month">
      <h2>Life</h2>
      <LifeList />
      <NavigationArrow selector="life" />
    </div>
  );
};
