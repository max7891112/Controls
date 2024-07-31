import { Arrow } from "./Arrow";
import cl from "classnames";
import { selectorType } from "../interface/interface";

const getTypeNav = (selector: selectorType) => {
  return {
    today: {
      leftWay: "/life",
      leftTooltip: "Life",
      rightWay: "/month",
      rightTooltip: "Month",
    },
    month: {
      leftWay: "/",
      leftTooltip: "Today",
      rightWay: "/year",
      rightTooltip: "Year",
    },
    year: {
      leftWay: "/month",
      leftTooltip: "Month",
      rightWay: "/life",
      rightTooltip: "Life",
    },
    life: {
      leftWay: "/year",
      leftTooltip: "Year",
      rightWay: "/",
      rightTooltip: "Today",
    },
  }[selector];
};
export const NavigationArrow: React.FC<{ selector: selectorType }> = ({
  selector,
}) => {
  const navigation = getTypeNav(selector);
  return (
    <>
      <Arrow
        className={cl("month-svg", "month-svg-left")}
        way={navigation.leftWay}
        tooltip={navigation.leftTooltip}
      />
      <Arrow
        className={cl("month-svg", "month-svg-right")}
        way={navigation.rightWay}
        tooltip={navigation.rightTooltip}
      />
    </>
  );
};
