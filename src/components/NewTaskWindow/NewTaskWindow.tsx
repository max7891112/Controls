import "./newTask.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { NewTaskWindowPropsType } from "../../interface/interface";

export const NewTaskWindow: NewTaskWindowPropsType = ({
  cancelTask,
  finishAddTask,
  title = "",
  description = "",
  long = "",
  editMode = false,
  id = "",
}) => {
  const [state, setState] = useState({
    title: editMode ? title : "",
    description: editMode ? description : "",
    long: editMode ? long : "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            value={state.title}
            onChange={handleInputChange}
            name="title"
            label="Write your every day task"
            variant="standard"
            autoFocus
          />
          <TextField
            value={state.description}
            onChange={handleInputChange}
            name="description"
            label="Describe your task"
            variant="standard"
          />
          <TextField
            value={state.long}
            onChange={handleInputChange}
            name="long"
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
              finishAddTask(
                state.title,
                state.description,
                state.long,
                editMode,
                id
              )
            }
          >
            Add
          </Button>
        </Stack>
      </div>
    </>
  );
};
