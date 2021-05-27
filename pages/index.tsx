import { Group, Layer, Rect, Stage, Text } from "react-konva";

export default function Home() {
  return (
    <Stage width={1000} height={1000}>
      <Layer>
        <Group>
          <Rect x={0} y={0} width={1000} height={1000} strokeWidth={4} />
          <Rect
            x={0}
            y={0}
            width={30}
            height={30}
            cornerRadius={10}
            fill="red"
            scale={{ x: 0.92, y: 0.92 }}
            shadowEnabled={true}
            shadowOffset={{ x: 0, y: -5 }}
            shadowOpacity={1}
            shadowBlur={6}
            shadowColor="rgba(0,0,0,0.2)"
          />
          <Text
            x={0}
            y={0}
            fill="rgba(0,0,0,0.6)"
            text="2"
            padding={4}
            fontSize={16}
            fontStyle="bold"
            fontFamily="SDF"
          />
        </Group>
      </Layer>
    </Stage>
  );
}
