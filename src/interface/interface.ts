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

export type CheckboxListPropsType = React.FC<{
  long: boolean[];
  id: string;
}>;

export type PercantageType = (tasks: TaskType[]) => number;

export type AddTaskType = {
  payload: {
    title: string;
    description: string;
    long: boolean[];
    editMode?: boolean;
    id?: string;
  };
  type: string;
};

export type EditTaskType = {
  payload: {
    id: string;
  };
  type: string;
};

export type CancelTaskType = {
  payload: {
    id: string;
  };
  type: string;
};

export type DeleteTaskType = {
  payload: {
    id: string;
  };
  type: string;
};

export type CompleteCheckType = {
  payload: {
    id: string;
    checkboxIndex: number;
  };
  type: string;
};

export type selectorType = "today" | "month" | "year" | "life";

export type sendPercantageLifeType = {
  payload: {
    percantage: number;
    index: number;
    birthday: number;
  };
  type: string;
};

export type sendPercantageType = {
  payload: {
    percantage: number;
    index: number;
  };
  type: string;
};

export type userActionType = {
  type: string;
  payload: {
    email: string | null;
    token: string;
    id: string;
  };
};

export type userStateType = {
  email: string | null;
  token: string;
  id: string;
};
