import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4 {
    margin-bottom: 10px;
  }

  button {
    padding: 10px 15px;
    cursor: pointer;
  }
`;
