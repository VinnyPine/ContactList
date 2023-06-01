export const getDate = (data: Date): string => {
  const date = new Date(data);

  const hoursStr =
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

  const minutesStr =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${hoursStr}:${minutesStr}  ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
};
