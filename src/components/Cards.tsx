import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  title: string;
  image: string;
};

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s ease-in-out, background 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) =>
      theme.name === "theme3" ? "#ffefd5" : theme.cardBackground};
  }
`;

const Card: React.FC<Props> = ({ title, image }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} width="100px" style={{ marginBottom: "10px" }} />
      <h4>{title}</h4>
    </CardContainer>
  );
};

export default Card;

