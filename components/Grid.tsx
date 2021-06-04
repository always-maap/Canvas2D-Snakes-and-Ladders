import { Group, Rect, Text } from "react-konva";
import { getLayout } from "../helpers/layoutHelper";

const Grid = () => {
  const layout = getLayout(700, 700);

  return (
    <>
      {Object.keys(layout).map((box: string) => (
        <Group key={`box_${box}`}>
          <Rect
            x={layout[box].x - 50 / 2}
            y={layout[box].y - 50 / 2}
            width={65}
            height={65}
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
            x={layout[box].x - 50 / 2}
            y={layout[box].y - 50 / 2}
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
