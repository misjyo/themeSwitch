import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 10;
`;

const Header: React.FC = () => {
  const { themeName, setTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <h2>My Themed App</h2>
      <select value={themeName} onChange={(e) => setTheme(e.target.value)}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </HeaderContainer>
  );
};

export default Header;
