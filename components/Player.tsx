import { Image } from "react-konva";
import useImage from "use-image";
import { FC } from "react";
import { getCoordinates } from "../helpers";
import { useRedraw } from "../hooks/useRedraw";

type Props = {
  pos: number;
};

const Player: FC<Props> = (props) => {
  const { pos } = props;
  const size = useRedraw((state) => state.size);
  const [largeSnake] = useImage("/assets/images/players/cute-pink.svg");

  const { x, y } = getCoordinates(pos);
  const playerSize = size / 10;

  return (
    <Image x={x - playerSize / 2} y={y - playerSize / 2} width={playerSize} height={playerSize} image={largeSnake} />
  );
};

export default Player;
