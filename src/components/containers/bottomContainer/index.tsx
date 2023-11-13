import { BottomContainerStyle } from "./styles.tsx";

interface CustomContainerProps {
  children: JSX.Element;
}

const BottomContainer = ({ children }: CustomContainerProps) => {
  return <BottomContainerStyle>{children}</BottomContainerStyle>;
};

export default BottomContainer;
