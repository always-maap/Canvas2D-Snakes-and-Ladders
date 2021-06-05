import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<any>`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.backgroundColor}; 
    color: ${({ theme }) => theme.textColor};
  }
`;
