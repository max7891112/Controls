import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { AddNewTaskPropsType } from "../../interface/interface";
import { useAppDispatch } from "../../providers/store/hooks";
import { addTask } from "../../providers/store/controlAddTaskSlice";

export const AddNewTask: AddNewTaskPropsType = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="main-new-task-container"
      onClick={() => {
        dispatch(addTask());
      }}
    >
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>

      <p>Add new task</p>
    </div>
  );
};
