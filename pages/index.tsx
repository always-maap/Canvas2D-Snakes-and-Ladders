import { Layer, Stage } from "react-konva";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <Stage width={1000} height={1000}>
      <Layer>
        <Grid />
      </Layer>
    </Stage>
  );
}
