import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { CheckboxListPropsType } from "../../interface/interface";

export const CheckboxList: CheckboxListPropsType = ({ checkboxes }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      {checkboxes.map((_, index) => {
        return (
          <Tooltip key={index} title="30 minutes" placement="bottom">
            <Checkbox {...label} />
          </Tooltip>
        );
      })}
    </div>
  );
};
