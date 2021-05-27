import { Image } from "react-konva";
import useImage from "use-image";

const Snakes = () => {
  const [image] = useImage("/assets/images/snakes/medium.png");

  return <Image image={image} x={900} y={900} width={200} height={900} rotation={135} />;
};

export default Snakes;
