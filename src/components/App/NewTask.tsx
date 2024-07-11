import { NewTaskPropsType } from "../../interface/interface";
import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";
import { AddNewTask } from "./AddNewTask";

export const NewTask: NewTaskPropsType = ({
  isAddTask,
  cancelTask,
  finishAddTask,
  addTask,
}) => {
  return (
    <>
      {isAddTask ? (
        <NewTaskWindow cancelTask={cancelTask} finishAddTask={finishAddTask} />
      ) : (
        <AddNewTask addTask={addTask} />
      )}
    </>
  );
};
