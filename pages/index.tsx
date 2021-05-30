import { Layer, Stage } from "react-konva";
import Grid from "../components/Grid";
import Snake from "../components/Snake";
import { getLadders, getSnakes } from "../helpers";
import Ladder from "../components/Ladder";

export default function Home() {
  const snakes = getSnakes();
  const ladders = getLadders();

  return (
    <>
      <Stage width={1000} height={1000}>
        <Layer>
          <Grid />
          {snakes.map((snake) => (
            <Snake key={snake.id} startPos={snake.startPos} endPos={snake.endPos} />
          ))}
          {ladders.map((ladder) => (
            <Ladder key={ladder.id} startPos={ladder.startPos} endPos={ladder.endPos} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
