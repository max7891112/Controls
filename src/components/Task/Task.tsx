import "./Task.scss";
import { TaskPropsType } from "../../interface/interface";
import { EditButtons } from "./EditButtons";
import { CheckboxList } from "./CheckboxList";

export const Task: TaskPropsType = ({ id, title, description, long }) => {
  return (
    <>
      <div className="current-task_container">
        <h2 className="current-task_title">{title}</h2>
        <p className="current-task_description">{description}</p>
        <CheckboxList long={long} id={id} />
        <EditButtons id={id} />
      </div>
    </>
  );
};
