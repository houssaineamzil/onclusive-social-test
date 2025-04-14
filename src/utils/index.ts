export { cn } from "./classnames";

export const random = (array: Array<any>) => {
  return array[Math.floor(Math.random() * array.length)];
};
