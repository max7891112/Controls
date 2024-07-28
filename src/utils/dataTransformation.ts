export const getCountDays = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const date1 = new Date(currentYear, currentMonth + 1, 1);
  const date2 = new Date(currentYear, currentMonth + 2, 1);

  const countDays = Math.ceil(
    (date2.getTime() - date1.getTime()) / 1000 / 3600 / 24
  );
  return countDays;
};

export const getWeekday = (index: number = 0) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const date = new Date(currentYear, currentMonth + index, 1);
  return date.getDay();
};

const getIndexDay = (i: number) => {
  return getWeekday() + i - 1 > 6
    ? (getWeekday() + i - 1) % 7
    : getWeekday() + i - 1;
};

export const getIndex = () => {
  const arr = [];
  if (getWeekday() > 1) {
    for (let i = 1; i < getWeekday(); i++) {
      arr.push([0, -1, 0]);
    }
  }
  if (getWeekday() === 0) {
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

export const getOffsetWeekday = () => {
  return (
    {
      0: 6,
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
    }[getWeekday()] || 0
  );
};

export const data = createData();
