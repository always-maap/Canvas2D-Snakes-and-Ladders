import { Layer, Stage } from "react-konva";
import Grid from "../components/Grid";
import Snake from "../components/Snake";
import Ladder from "../components/Ladder";
import { useEffect } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { useRedraw } from "../hooks/useRedraw";
import Player from "../components/Player";
import { useBoard } from "../hooks/useBoard";

export default function Home() {
  const redraw = useRedraw((state) => state.redraw);
  const size = useRedraw((state) => state.size);
  const { snakes, ladders, players, init } = useBoard();

  useEffect(() => {
    init();
    const redrawFn = (e: any) => redraw(e.target.outerWidth);
    window.addEventListener(
      "resize",
      debounce((e) => redrawFn(e), 200)
    );
  }, []);

  return (
    <Root>
      <Stage width={size} height={size}>
        <Layer>
          <Grid />
          {snakes.map((snake) => (
            <Snake key={snake.id} startPos={snake.startPos} endPos={snake.endPos} />
          ))}
          {ladders.map((ladder) => (
            <Ladder key={ladder.id} startPos={ladder.startPos} endPos={ladder.endPos} />
          ))}
          {players.map((player) => (
            <Player key={player.id} pos={player.pos} id={player.id} />
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
