import { Group, Rect, Text } from "react-konva";
import { getLayout } from "../helpers/layoutHelper";
import { useRedraw } from "../hooks/useRedraw";
import { useTheme } from "../hooks/useTheme";
import { COLORS } from "../theme/colors";

const Grid = () => {
  const size = useRedraw((state) => state.size);
  const layout = getLayout(size, size);
  const boxWidth = size / 10;
  const theme = useTheme((state) => state.theme);

  return (
    <>
      {Object.keys(layout).map((box: string) => {
        const isEven = +box % 2 === 0;

        return (
          <Group key={`box_${box}`}>
            <Rect
              x={layout[box].x - boxWidth / 2}
              y={layout[box].y - boxWidth / 2}
              width={boxWidth}
              height={boxWidth}
              cornerRadius={10}
              fill={isEven ? COLORS.pink : theme === "light" ? COLORS.white : COLORS.grey}
              scale={{ x: 0.92, y: 0.92 }}
              shadowEnabled={true}
              shadowOffset={{ x: 0, y: -5 }}
              shadowOpacity={1}
              shadowBlur={6}
              shadowColor="rgba(0,0,0,0.2)"
            />
            <Text
              x={layout[box].x - boxWidth / 2}
              y={layout[box].y - boxWidth / 2}
              fill="rgba(0,0,0,0.6)"
              text={box}
              padding={4}
              fontSize={16}
              fontStyle="bold"
            />
          </Group>
        );
      })}
    </>
  );
};

export default Grid;
