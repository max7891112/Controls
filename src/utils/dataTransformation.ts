const getCountDays = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const date1 = new Date(currentYear, currentMonth, 1);
  const date2 = new Date(currentYear, currentMonth + 1, 1);

  const countDays = Math.ceil(
    (date2.getTime() - date1.getTime()) / 1000 / 3600 / 24
  );
  return countDays;
};

const getFirstDay = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const date1 = new Date(currentYear, currentMonth, 1);
  return date1.getDay();
};

const getIndexDay = (i: number) => {
  return getFirstDay() + i - 1 > 6
    ? (getFirstDay() + i - 1) % 7
    : getFirstDay() + i - 1;
};

export const getIndex = () => {
  const arr = [];
  if (getFirstDay() > 1) {
    for (let i = 1; i < getFirstDay(); i++) {
      arr.push([0, -1, 0]);
    }
  }
  if (getFirstDay() === 0) {
    for (let i = 0; i < 6; i++) {
      arr.push([0, -1, 0]);
    }
  }
  return arr;
};

const createData = () => {
  const dataArr: number[][] = [];
  for (let i = 1; i < getCountDays() + 1; i++) {
    dataArr.push([i, getIndexDay(i), 0]);
  }
  return dataArr;
};

export const getFullMonth = (month: number) => {
  return {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }[month];
};

export const data = createData();
