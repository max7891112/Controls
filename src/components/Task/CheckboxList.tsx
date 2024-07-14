import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { CheckboxListPropsType } from "../../interface/interface";

export const CheckboxList: CheckboxListPropsType = ({
  long,
  completeCheck,
  id,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  console.log(long);
  return (
    <div>
      {long.map((_, index) => {
        return (
          <Tooltip key={index} title="30 minutes" placement="bottom">
            <Checkbox
              {...label}
              onClick={() => {
                completeCheck(id, index);
              }}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};
