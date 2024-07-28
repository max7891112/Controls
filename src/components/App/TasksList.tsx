import { useAppSelector } from "../../providers/store/hooks";
import { Task } from "../Task/Task";
import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";

export const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <>
      {tasks.map((task) => {
        return task.editMode ? (
          <NewTaskWindow
            key={task.id}
            title={task.title}
            description={task.description}
            long={task.long}
            editMode={task.editMode}
            id={task.id}
          />
        ) : (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            long={task.long}
          />
        );
      })}
    </>
  );
};
