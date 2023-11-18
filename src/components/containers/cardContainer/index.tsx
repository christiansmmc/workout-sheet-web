import { CardContainerStyle } from "./styles.tsx";

interface CardContainerProps {
  children: JSX.Element;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return <CardContainerStyle>{children}</CardContainerStyle>;
};

export default CardContainer;
