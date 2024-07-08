import "./newTask.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState } from "react";
export const NewTask: React.FC<{
  cancelTask: (id: string) => void;
  finishAddTask: (
    title: string,
    description: string,
    long: string,
    editMode: boolean,
    id: string
  ) => void;
  title?: string;
  description?: string;
  long?: string;
  editMode?: boolean;
  id?: string;
}> = ({
  cancelTask,
  finishAddTask,
  title = "",
  description = "",
  long = "",
  editMode = false,
  id = "",
}) => {
  const [taskTitle, setTaskTitle] = useState(editMode ? title : "");
  const [taskDescription, setTaskDescription] = useState(
    editMode ? description : ""
  );
  const [taskLong, setTaskLong] = useState(editMode ? long : "");
  const onChangeHandlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value);
  };
  const onChangeHandlerDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskDescription(event.currentTarget.value);
  };
  const onChangeHandlerLong = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskLong(event.currentTarget.value);
  };
  return (
    <>
      <div className="task_container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.2 },
          }}
          className="task_box"
          noValidate
          autoComplete="off"
        >
          <TextField
            value={taskTitle}
            onChange={onChangeHandlerTitle}
            id="task-title"
            label="Write your every day task"
            variant="standard"
            autoFocus
          />
          <TextField
            value={taskDescription}
            onChange={onChangeHandlerDescription}
            id="task-description"
            label="Describe your task"
            variant="standard"
          />
          <TextField
            value={taskLong}
            onChange={onChangeHandlerLong}
            id="task-long"
            label="How long will it take"
            variant="standard"
          />
        </Box>
        <Stack direction="row" spacing={2} className="task_button-container">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => cancelTask(id)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() =>
              finishAddTask(taskTitle, taskDescription, taskLong, editMode, id)
            }
          >
            Add
          </Button>
        </Stack>
      </div>
    </>
  );
};
