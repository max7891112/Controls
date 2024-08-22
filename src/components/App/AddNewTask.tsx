import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../providers/store/hooks";
import { addTask } from "../../providers/store/slices/addTaskSlice";

export const AddNewTask = () => {
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
