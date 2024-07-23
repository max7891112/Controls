import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";
import { AddNewTask } from "./AddNewTask";
import { useAppSelector } from "../../providers/store/hooks";

export const NewTask = () => {
  const isAddTask = useAppSelector((state) => state.isAddTask.isAddTask);
  return <>{isAddTask ? <NewTaskWindow /> : <AddNewTask />}</>;
};
