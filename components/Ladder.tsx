import { Image } from "react-konva";
import useImage from "use-image";
import { FC } from "react";
import { getCoordinates, getPointsInfo } from "../helpers";

type Props = {
  startPos: number;
  endPos: number;
};

const Ladder: FC<Props> = (props) => {
  const { startPos, endPos } = props;
  const [longLadder] = useImage("/assets/images/ladders/long.png");

  const { x: startX, y: startY } = getCoordinates(startPos);
  const { x: endX, y: endY } = getCoordinates(endPos);

  const { distance, angel } = getPointsInfo(startX, startY, endX, endY);

  return <Image x={startX} y={startY} width={30} height={distance} rotation={angel} image={longLadder} />;
};

export default Ladder;
