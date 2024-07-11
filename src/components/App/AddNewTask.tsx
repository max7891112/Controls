import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { AddNewTaskPropsType } from "../../interface/interface";
export const AddNewTask: AddNewTaskPropsType = ({ addTask }) => {
  return (
    <div className="main-new-task-container" onClick={addTask}>
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
      <p>Add new task</p>
    </div>
  );
};
