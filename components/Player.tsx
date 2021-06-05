import useImage from "use-image";
import { FC, useState } from "react";
import { getCoordinates } from "../helpers";
import { useRedraw } from "../hooks/useRedraw";
import { animated } from "@react-spring/konva";
import { useSpring } from "react-spring";

type Props = {
  id: number;
  pos: number;
};

const Player: FC<Props> = (props) => {
  const { pos, id } = props;
  const size = useRedraw((state) => state.size);
  const [cutePink] = useImage("/assets/images/players/cute-pink.svg");
  const [blueGem] = useImage("/assets/images/players/blue-gem.svg");

  const { x, y } = getCoordinates(pos);
  const playerSize = size / 10;

  return (
    <animated.Image
      x={x - playerSize / 2}
      y={y - playerSize / 2}
      width={playerSize}
      height={playerSize}
      image={id === 1 ? cutePink : blueGem}
    />
  );
};

export default Player;
