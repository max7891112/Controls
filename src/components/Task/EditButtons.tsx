import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditButtonsPropsType } from "../../interface/interface";

export const EditButtons: EditButtonsPropsType = ({
  handleClickEditTask,
  handleClickDeleteTask,
  id,
}) => {
  return (
    <div className="current-task_edit-container">
      <Fab
        color="primary"
        aria-label="edit"
        size="small"
        onClick={() => handleClickEditTask(id)}
      >
        <EditIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="edit"
        size="small"
        onClick={() => handleClickDeleteTask(id)}
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
};
