import { FC } from "react";
import { useTheme } from "../hooks/useTheme";

const Layout: FC = (props) => {
  const { children } = props;
  const toggle = useTheme((state) => state.toggle);

  return (
    <nav>
      <button onClick={toggle}>toggle</button>
      {children}
    </nav>
  );
};

export default Layout;
