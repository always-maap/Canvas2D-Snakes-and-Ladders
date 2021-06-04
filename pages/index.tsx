import { Layer, Stage } from "react-konva";
import Grid from "../components/Grid";
import Snake from "../components/Snake";
import { getLadders, getSnakes } from "../helpers";
import Ladder from "../components/Ladder";
import { useEffect } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { useRedraw } from "../store/useRedraw";

export default function Home() {
  const redraw = useRedraw((state) => state.redraw);
  const size = useRedraw((state) => state.size);
  const snakes = getSnakes();
  const ladders = getLadders();

  useEffect(() => {
    const redrawFn = (e: any) => redraw(e.target.outerWidth, e.target.outerHeight);
    window.addEventListener(
      "resize",
      debounce((e) => redrawFn(e), 500)
    );
  }, []);

  console.log(size);

  return (
    <Root>
      <Stage width={700} height={700}>
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
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
