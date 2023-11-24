import { CardContainerStyle } from "./styles.tsx";

interface CardContainerProps {
  children: JSX.Element;
  bottomHeight?: string;
}

const CardContainer = ({ children, bottomHeight }: CardContainerProps) => {
  return (
    <CardContainerStyle $maxHeight={bottomHeight}>
      {children}
    </CardContainerStyle>
  );
};

export default CardContainer;
