import { PercantageType } from "../interface/interface";
export function changeLong(str: string) {
  const arr = [];
  for (let i = 0; i < +str.trim(); i++) {
    arr.push(false);
  }
  return arr;
}

export function reverseChangeLong(arr: boolean[]) {
  let str = 0;
  for (let i = 0; i < arr.length; i++) {
    str++;
  }
  return str.toString();
}

export const getPercentage: PercantageType = (tasks) => {
  let countTask = 0;
  let completeTask = 0;
  tasks.forEach((task) => {
    task.long.forEach((item) => {
      countTask++;
      completeTask += item ? 1 : 0;
    });
  });
  const weightOneTask = 100 / countTask;
  return Math.ceil(completeTask * weightOneTask);
};
