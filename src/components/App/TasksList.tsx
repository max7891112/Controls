import { TaskListPropsType } from "../../interface/interface";
import { Task } from "../Task/Task";
import { NewTaskWindow } from "../NewTaskWindow/NewTaskWindow";
export const TasksList: TaskListPropsType = ({
  tasks,
  cancelTask,
  finishAddTask,
  editTask,
  deleteTask,
}) => {
  return (
    <>
      {tasks.map((task) => {
        return task.editMode ? (
          <NewTaskWindow
            cancelTask={cancelTask}
            finishAddTask={finishAddTask}
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
            handleClickEditTask={editTask}
            handleClickDeleteTask={deleteTask}
          />
        );
      })}
    </>
  );
};
