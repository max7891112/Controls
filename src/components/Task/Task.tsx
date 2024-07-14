import "./Task.scss";
import { TaskPropsType } from "../../interface/interface";
import { EditButtons } from "./EditButtons";
import { CheckboxList } from "./CheckboxList";

export const Task: TaskPropsType = ({
  id,
  title,
  description,
  long,
  handleClickEditTask,
  handleClickDeleteTask,
  completeCheck,
}) => {
  return (
    <>
      <div className="current-task_container">
        <h2 className="current-task_title">{title}</h2>
        <p className="current-task_description">{description}</p>
        <CheckboxList long={long} completeCheck={completeCheck} id={id} />
        <EditButtons
          handleClickDeleteTask={handleClickDeleteTask}
          handleClickEditTask={handleClickEditTask}
          id={id}
        />
      </div>
    </>
  );
};
