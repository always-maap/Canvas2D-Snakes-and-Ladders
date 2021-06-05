import useImage from "use-image";
import { FC, useState } from "react";
import { getCoordinates } from "../helpers";
import { useRedraw } from "../hooks/useRedraw";
import { animated } from "@react-spring/konva";
import { useSpring } from "react-spring";

type Props = {
  pos: number;
};

const Player: FC<Props> = (props) => {
  const { pos } = props;
  const size = useRedraw((state) => state.size);
  const [largeSnake] = useImage("/assets/images/players/cute-pink.svg");

  const { x, y } = getCoordinates(pos);
  const playerSize = size / 10;

  const [flip, set] = useState(false);
  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });

  return (
    <animated.Image
      {...animationProps}
      x={x - playerSize / 2}
      y={y - playerSize / 2}
      width={playerSize}
      height={playerSize}
      image={largeSnake}
    />
  );
};

export default Player;
