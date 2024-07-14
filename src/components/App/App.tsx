import "./App.scss";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { v1 } from "uuid";
import { TaskType } from "../../interface/interface";
import { TasksList } from "../App/TasksList";
import { NewTask } from "./NewTask";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getPercentage } from "../../utils/transformDataLong";

function App() {
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: v1(),
      title: "Sport",
      description: "Run",
      long: [false, false],
      editMode: false,
    },
  ]);
  const handleClickFinishAddTask = (
    title: string,
    description: string,
    long: boolean[],
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
        {
          id: v1(),
          title,
          description,
          long,
          editMode: false,
        },
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
        return task;
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
  const handleClickCompleteCheck = (id: string, checkboxIndex: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            long: task.long.map((item, index) =>
              index === checkboxIndex ? !item : item
            ),
          };
        }
        return task;
      })
    );
  };

  const allTaskLong = getPercentage(tasks);

  return (
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

          <TasksList
            tasks={tasks}
            cancelTask={handleClickCancelTask}
            finishAddTask={handleClickFinishAddTask}
            editTask={handleClickEditTask}
            deleteTask={handleClickDeleteTask}
            completeCheck={handleClickCompleteCheck}
          />
          <NewTask
            isAddTask={isAddTask}
            cancelTask={handleClickAddTask}
            finishAddTask={handleClickFinishAddTask}
            addTask={handleClickAddTask}
          />
        </div>
      </div>
      <div className="footer">
        <CircularProgressbar
          value={allTaskLong}
          text={`${allTaskLong}%`}
          className="main-progressbar"
        />
      </div>
    </div>
  );
}

export default App;
