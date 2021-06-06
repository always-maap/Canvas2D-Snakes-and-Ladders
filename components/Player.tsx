import useImage from "use-image";
import { FC, useRef } from "react";
import { getCoordinates } from "../helpers";
import { useRedraw } from "../hooks/useRedraw";
import { animated } from "@react-spring/konva";
import { useSpring } from "react-spring";
import { useBoard } from "../hooks/useBoard";

type Props = {
  id: number;
  pos: number;
};

const Player: FC<Props> = (props) => {
  const { pos, id } = props;
  const [cutePink] = useImage("/assets/images/players/cute-pink.svg");
  const [blueGem] = useImage("/assets/images/players/blue-gem.svg");

  const size = useRedraw((state) => state.size);
  const checkPlacement = useBoard((state) => state.checkPlacement);

  const { x, y } = getCoordinates(pos);
  const playerSize = size / 10;

  const xPos = x - playerSize / 2;
  const yPos = y - playerSize / 2;

  const prevPos = useRef({ x: xPos, y: yPos });

  const animationProps = useSpring({
    from: { x: prevPos.current.x, y: prevPos.current.y },
    to: { x: xPos, y: yPos },
    reset: true,
    onRest: () => {
      setTimeout(checkPlacement, 500);
      prevPos.current = { x: xPos, y: yPos };
    },
  });

  return (
    <animated.Image {...animationProps} width={playerSize} height={playerSize} image={id === 1 ? cutePink : blueGem} />
  );
};

export default Player;
