import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { CheckboxListPropsType } from "../../interface/interface";
import { useAppDispatch } from "../../providers/store/hooks";
import { completeCheck } from "../../providers/store/controlSlice";

export const CheckboxList: CheckboxListPropsType = ({ long, id }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useAppDispatch();
  return (
    <div>
      {long.map((_, index) => {
        return (
          <Tooltip key={index} title="30 minutes" placement="bottom">
            <Checkbox
              {...label}
              onClick={() => {
                dispatch(completeCheck({ id, checkboxIndex: index }));
              }}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};
