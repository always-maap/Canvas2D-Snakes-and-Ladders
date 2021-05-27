import { Group, Rect, Text } from "react-konva";

const Grid = () => {
  function getLayout(width: number, height: number) {
    const gridWidth = width;
    const gridHeight = height;
    const boxWidth = width / 10;
    const boxHeight = height / 10;

    let layout: { [key: string]: { x: number; y: number; id: number } } = {};
    const oddRows = [1, 3, 5, 7, 9],
      evenRows = [0, 2, 4, 6, 8];

    for (let col = 1; col <= 10; col++) {
      evenRows.map((row) => {
        layout[col + 10 * row] = {
          x: (col - 1) * boxWidth + boxWidth / 2,
          y: gridHeight - (row * boxHeight + boxHeight / 2),
          id: col + 10 * row,
        };
      });

      oddRows.map((row) => {
        layout[col + 10 * row] = {
          x: gridWidth - ((col - 1) * boxWidth + boxWidth / 2),
          y: gridHeight - (row * boxHeight + boxHeight / 2),
          id: col + 10 * row,
        };
      });
    }
    return layout;
  }

  const layout = getLayout(1000, 1000);

  return (
    <>
      {Object.keys(layout).map((box: string) => (
        <Group key={`box_${box}`}>
          <Rect
            x={layout[box].x - 100 / 2}
            y={layout[box].y - 100 / 2}
            width={100}
            height={100}
            cornerRadius={10}
            fill="orangered"
            scale={{ x: 0.92, y: 0.92 }}
            shadowEnabled={true}
            shadowOffset={{ x: 0, y: -5 }}
            shadowOpacity={1}
            shadowBlur={6}
            shadowColor="rgba(0,0,0,0.2)"
          />
          <Text
            x={layout[box].x - 100 / 2}
            y={layout[box].y - 100 / 2}
            fill="rgba(0,0,0,0.6)"
            text={box}
            padding={4}
            fontSize={16}
            fontStyle="bold"
          />
        </Group>
      ))}
    </>
  );
};

export default Grid;
