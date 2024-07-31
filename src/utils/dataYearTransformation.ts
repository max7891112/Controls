export const createDataYear = () => {
  const dataArr: number[][] = [];
  for (let i = 0; i < 12; i++) {
    dataArr.push([i, 0]);
  }
  return dataArr;
};

export const summaryPersantageMonth = (monthData: number[][]) => {
  const summaryPersantage = monthData.reduce((acc, val) => acc + val[2], 0);
  const monthPercantage = Math.ceil(summaryPersantage / monthData.length);
  return monthPercantage;
};
