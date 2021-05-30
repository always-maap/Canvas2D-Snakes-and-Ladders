import { Image } from "react-konva";
import useImage from "use-image";
import { FC } from "react";
import { getPointsInfo } from "../helpers/pointInfoHelper";
import { getCoordinates } from "../helpers/cordinateHelper";

type Props = {
  startPos: number;
  endPos: number;
};

const Snakes: FC<Props> = (props) => {
  const { startPos, endPos } = props;
  // const [smallSnake] = useImage("/assets/images/snakes/small.png");
  // const [mediumSnake] = useImage("/assets/images/snakes/medium.png");
  const [largeSnake] = useImage("/assets/images/snakes/long.png");

  const { x: startX, y: startY } = getCoordinates(startPos);
  const { x: endX, y: endY } = getCoordinates(endPos);

  const { distance, angel } = getPointsInfo(startX, startY, endX, endY);

  return <Image x={startX} y={startY} width={30} height={distance} rotation={angel} image={largeSnake} />;
};

export default Snakes;
