import { NewTaskPropsType } from "../../interface/interface";
import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";
import { AddNewTask } from "./AddNewTask";
import { useAppSelector } from "../../providers/store/hooks";

export const NewTask: NewTaskPropsType = () => {
  const isAddTask = useAppSelector((state) => state.isAddTask.isAddTask);
  return <>{isAddTask ? <NewTaskWindow /> : <AddNewTask />}</>;
};
