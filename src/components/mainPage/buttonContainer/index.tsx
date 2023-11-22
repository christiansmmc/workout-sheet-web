import { ButtonContainerStyle } from "./styles.tsx";

interface ButtonContainerProps {
  children: JSX.Element;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <ButtonContainerStyle>{children}</ButtonContainerStyle>;
};

export default ButtonContainer;
