import { BottomContainerStyle } from "./styles.tsx";

interface BottomContainerProps {
  children: JSX.Element;
}

const BottomContainer = ({ children }: BottomContainerProps) => {
  return <BottomContainerStyle>{children}</BottomContainerStyle>;
};

export default BottomContainer;
