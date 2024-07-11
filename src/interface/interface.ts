export type TaskType = {
  id: string;
  title: string;
  description: string;
  long: string;
  editMode: boolean;
};

export type NewTaskWindowPropsType = React.FC<{
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
}>;

export type TaskPropsType = React.FC<{
  id: string;
  title: string;
  description: string;
  long: string;
  handleClickEditTask: (id: string) => void;
  handleClickDeleteTask: (id: string) => void;
}>;

export type EditButtonsPropsType = React.FC<{
  handleClickEditTask: (id: string) => void;
  handleClickDeleteTask: (id: string) => void;
  id: string;
}>;

export type AddNewTaskPropsType = React.FC<{
  addTask: () => void;
}>;

export type TaskListPropsType = React.FC<{
  tasks: TaskType[];
  cancelTask: (id: string) => void;
  finishAddTask: (
    title: string,
    description: string,
    long: string,
    editMode: boolean,
    id: string
  ) => void;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
}>;

export type NewTaskPropsType = React.FC<{
  isAddTask: boolean;
  cancelTask: () => void;
  finishAddTask: (
    title: string,
    description: string,
    long: string,
    editMode?: boolean,
    id?: string
  ) => void;
  addTask: () => void;
}>;

export type CheckboxListPropsType = React.FC<{
  checkboxes: number[];
}>;
