import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditButtonsPropsType } from "../../interface/interface";
import { useAppDispatch } from "../../providers/store/hooks";
import { deleteTask } from "../../providers/store/slices/taskSlice";
import { editTask } from "../../providers/store/slices/taskSlice";

export const EditButtons: EditButtonsPropsType = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="current-task_edit-container">
      <Fab
        color="primary"
        aria-label="edit"
        size="small"
        onClick={() => {
          dispatch(editTask({ id }));
        }}
      >
        <EditIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="edit"
        size="small"
        onClick={() => dispatch(deleteTask({ id }))}
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
};
