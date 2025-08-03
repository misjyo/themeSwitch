import React, { useContext, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeContext } from "./context/ThemeContext";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { motion } from "framer-motion";

const Sidebar = styled.div`
  width: 200px;
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
`;

const Content = styled.main<{ layout: string }>`
  margin-top: 70px;
  padding: 20px;
  transition: all 0.3s ease;
  ${({ layout }) => layout === "sidebar" && "margin-left: 220px;"}
`;

const LayoutWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { themeName } = useContext(ThemeContext);
  const layout = themeName === "theme2" ? "sidebar" : "default";

  return (
    <motion.div
      key={themeName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {layout === "sidebar" && (
        <Sidebar>
          <p>Sidebar Menu</p>
          <p>Link 1</p>
          <p>Link 2</p>
        </Sidebar>
      )}
      <Content layout={layout}>{children}</Content>
    </motion.div>
  );
};

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Header />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  </>
);

export default App;


