import { Layer, Stage } from "react-konva";
import Grid from "../components/Grid";
import Snakes from "../components/Snakes";
import { getSnakes } from "../helpers/snakesHelper";

export default function Home() {
  const snakes = getSnakes();

  console.log(snakes);

  return (
    <>
      <Stage width={1000} height={1000}>
        <Layer>
          <Grid />
          {snakes.map((snake) => (
            <Snakes key={snake.id} startPos={snake.startPos} endPos={snake.endPos} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
