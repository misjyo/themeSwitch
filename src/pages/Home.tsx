import React, { useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Cards";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const GridContainer = styled.div<{ layout: string }>`
  display: ${({ layout }) => (layout === "grid" ? "grid" : "block")};
  grid-template-columns: ${({ layout }) =>
    layout === "grid" ? "repeat(auto-fit, minmax(200px, 1fr))" : "none"};
  gap: ${({ layout }) => (layout === "grid" ? "20px" : "10px")};
`;

const Home: React.FC = () => {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
  const { themeName } = useContext(ThemeContext);

  return (
    <motion.div
      key={themeName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Home</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>⚠ {error}</p>}

      {!loading && !error && (
        <GridContainer layout={themeName === "theme3" ? "grid" : "list"}>
          {data.map((item) => (
            <Card key={item.id} title={item.title} image={item.image} />
          ))}
        </GridContainer>
      )}
    </motion.div>
  );
};

export default Home;

