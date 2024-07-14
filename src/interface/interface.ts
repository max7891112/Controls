export type TaskType = {
  id: string;
  title: string;
  description: string;
  long: boolean[];
  editMode: boolean;
};

export type NewTaskWindowPropsType = React.FC<{
  cancelTask: (id: string) => void;
  finishAddTask: (
    title: string,
    description: string,
    long: boolean[],
    editMode: boolean,
    id: string
  ) => void;
  title?: string;
  description?: string;
  long?: boolean[];
  editMode?: boolean;
  id?: string;
}>;

export type TaskPropsType = React.FC<{
  id: string;
  title: string;
  description: string;
  long: boolean[];
  handleClickEditTask: (id: string) => void;
  handleClickDeleteTask: (id: string) => void;
  completeCheck: (id: string, checkboxIndex: number) => void;
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
    long: boolean[],
    editMode: boolean,
    id: string
  ) => void;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  completeCheck: (id: string, checkboxIndex: number) => void;
}>;

export type NewTaskPropsType = React.FC<{
  isAddTask: boolean;
  cancelTask: () => void;
  finishAddTask: (
    title: string,
    description: string,
    long: boolean[],
    editMode?: boolean,
    id?: string
  ) => void;
  addTask: () => void;
}>;

export type CheckboxListPropsType = React.FC<{
  long: boolean[];
  completeCheck: (id: string, checkboxIndex: number) => void;
  id: string;
}>;

export type PercantageType = (tasks: TaskType[]) => number;
