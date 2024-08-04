import { Arrow } from "./Arrow";
import cl from "classnames";
import { selectorType } from "../interface/interface";

const getTypeNav = (selector: selectorType) => {
  return {
    today: {
      leftWay: "/controls/life",
      leftTooltip: "Life",
      rightWay: "/controls/month",
      rightTooltip: "Month",
    },
    month: {
      leftWay: "/controls",
      leftTooltip: "Today",
      rightWay: "/controls/year",
      rightTooltip: "Year",
    },
    year: {
      leftWay: "/controls/month",
      leftTooltip: "Month",
      rightWay: "/controls/life",
      rightTooltip: "Life",
    },
    life: {
      leftWay: "/controls/year",
      leftTooltip: "Year",
      rightWay: "/controls",
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
