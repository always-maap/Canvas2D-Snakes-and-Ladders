import { getLayout } from "./layoutHelper";

export const getCoordinates = (pos: number) => {
  const layout = getLayout(700, 700);
  const x = layout[pos].x;
  const y = layout[pos].y;

  return {
    x,
    y,
  };
};
