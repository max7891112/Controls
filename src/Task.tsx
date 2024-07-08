import "./Task.scss";
// import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
export const Task: React.FC<{
  id: string;
  title: string;
  description: string;
  long: string;
  handleClickEditTask: (id: string) => void;
  handleClickDeleteTask: (id: string) => void;
}> = ({
  id,
  title,
  description,
  long,
  handleClickEditTask,
  handleClickDeleteTask,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const transformLong = (long: string) => {
    let arr = [];
    for (let i = 0; i < +long; i++) {
      arr.push(1);
    }
    return arr;
  };
  const quantityCheckbox = transformLong(long);
  transformLong(long);

  return (
    <>
      <div className="current-task_container">
        <h2 className="current-task_title">{title}</h2>
        <p className="current-task_description">{description}</p>
        <div>
          {quantityCheckbox.map((elem, index) => {
            return (
              <Tooltip key={index} title="30 minutes" placement="bottom">
                <Checkbox {...label} />
              </Tooltip>
            );
          })}
        </div>
        <div className="current-task_edit-container">
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={() => handleClickEditTask(id)}
          >
            <EditIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={() => handleClickDeleteTask(id)}
          >
            <DeleteIcon />
          </Fab>
        </div>
      </div>
    </>
  );
};
