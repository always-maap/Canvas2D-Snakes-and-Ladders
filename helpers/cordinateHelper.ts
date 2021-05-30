import { getLayout } from "./layoutHelper";

export const getCoordinates = (pos: number) => {
  const layout = getLayout(1000, 1000);
  const x = layout[pos].x;
  const y = layout[pos].y;

  return {
    x,
    y,
  };
};
