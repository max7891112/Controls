export const createDataLife = (birthday: number) => {
  const dataArr: number[][] = [];
  for (let i = birthday; i <= new Date().getFullYear(); i++) {
    dataArr.push([i, 0]);
  }
  return dataArr;
};

export const summaryPersantageYear = (yearData: number[][]) => {
  const summaryPersantage = yearData.reduce((acc, val) => {
    return acc + val[1];
  }, 0);
  const yearPercantage = summaryPersantage / yearData.length;
  return yearPercantage;
};
