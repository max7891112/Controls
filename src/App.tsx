import "./App.scss";
import { useState } from "react";
import { Avatar } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { NewTask } from "./newTask";
import { Task } from "./Task";
import { v1 } from "uuid";

type taskType = {
  id: string;
  title: string;
  description: string;
  long: string;
  editMode: boolean;
};

function App() {
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState<taskType[]>([
    {
      id: v1(),
      title: "Sport",
      description: "Run",
      long: "2",
      editMode: false,
    },
  ]);
  const handleClickFinishAddTask = (
    title: string,
    description: string,
    long: string,
    editMode?: boolean,
    id?: string
  ) => {
    if (editMode) {
      setIsAddTask(false);
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, title, description, long, editMode: false };
          }
          return task;
        })
      );
    } else {
      setTasks([
        ...tasks,
        { id: v1(), title, description, long, editMode: false },
      ]);
      setIsAddTask(false);
    }
  };

  const handleClickCancelTask = (id: string) => {
    setIsAddTask(false);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, editMode: false };
        }
        return { ...task };
      })
    );
  };
  const handleClickEditTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, editMode: !task.editMode };
        }
        return task;
      })
    );
  };
  const handleClickAddTask = () => {
    setIsAddTask(!isAddTask);
  };
  const handleClickDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="header_title">Every day affairs</h1>
          <div className="header_logo-container">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <p className="header_logo-name">Max</p>
          </div>
        </div>
        <div className="main">
          <div className="main-container">
            <h2 className="main-today">Today</h2>
            {tasks.map((task) => {
              return task.editMode ? (
                <NewTask
                  cancelTask={handleClickCancelTask}
                  finishAddTask={handleClickFinishAddTask}
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
                  handleClickEditTask={handleClickEditTask}
                  handleClickDeleteTask={handleClickDeleteTask}
                />
              );
            })}
            {isAddTask ? (
              <NewTask
                cancelTask={handleClickCancelTask}
                finishAddTask={handleClickFinishAddTask}
              />
            ) : (
              <div
                className="main-new-task-container"
                onClick={handleClickAddTask}
              >
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
                <p>Add new task</p>
              </div>
            )}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
