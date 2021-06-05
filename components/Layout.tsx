import { FC } from "react";
import { useTheme } from "../hooks/useTheme";
import styled from "styled-components";
import { CgSun, CgMoon } from "react-icons/cg";

const Layout: FC = (props) => {
  const { children } = props;
  const { theme, toggle } = useTheme((state) => state);

  return (
    <>
      <Nav>{theme === "light" ? <CgMoon onClick={toggle} /> : <CgSun onClick={toggle} />}</Nav>
      {children}
    </>
  );
};

export default Layout;

const Nav = styled.nav`
  height: 55px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  z-index: 5;
  margin-bottom: 10px;
`;
