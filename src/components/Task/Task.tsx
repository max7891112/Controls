import "./Task.scss";
import { TaskPropsType } from "../../interface/interface";
import { transformLong } from "../../utils/transformDataLong";
import { EditButtons } from "./EditButtons";
import { CheckboxList } from "./CheckboxList";
export const Task: TaskPropsType = ({
  id,
  title,
  description,
  long,
  handleClickEditTask,
  handleClickDeleteTask,
}) => {
  const checkboxes: number[] = transformLong(long);

  return (
    <>
      <div className="current-task_container">
        <h2 className="current-task_title">{title}</h2>
        <p className="current-task_description">{description}</p>
        <CheckboxList checkboxes={checkboxes} />
        <EditButtons
          handleClickDeleteTask={handleClickDeleteTask}
          handleClickEditTask={handleClickEditTask}
          id={id}
        />
      </div>
    </>
  );
};
