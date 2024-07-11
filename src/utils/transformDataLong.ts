export const transformLong = (long: string) => {
  let arr = [];
  for (let i = 0; i < +long; i++) {
    arr.push(1);
  }
  return arr;
};
