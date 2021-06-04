import { getLayout } from "./layoutHelper";
import { useRedraw } from "../store/useRedraw";

export const getCoordinates = (pos: number) => {
  const size = useRedraw((state) => state.size);
  const layout = getLayout(size, size);

  const x = layout[pos].x;
  const y = layout[pos].y;

  return {
    x,
    y,
  };
};
