export type TaskType = {
  id: string;
  title: string;
  description: string;
  long: boolean[];
  editMode: boolean;
};

export type NewTaskWindowPropsType = React.FC<{
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
}>;

export type EditButtonsPropsType = React.FC<{
  id: string;
}>;

export type AddNewTaskPropsType = React.FC<{
  // addTask: () => void;
}>;

export type TaskListPropsType = React.FC<{}>;

export type NewTaskPropsType = React.FC<{
  // isAddTask: boolean;
  // addTask: () => void;
}>;

export type CheckboxListPropsType = React.FC<{
  long: boolean[];
  id: string;
}>;

export type PercantageType = (tasks: TaskType[]) => number;
