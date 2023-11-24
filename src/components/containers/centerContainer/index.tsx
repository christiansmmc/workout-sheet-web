import { CenterContainerStyle } from "./styles.tsx";

interface CenterContainerProps {
  children: JSX.Element;
}

const CenterContainer = ({ children }: CenterContainerProps) => {
  return <CenterContainerStyle>{children}</CenterContainerStyle>;
};

export default CenterContainer;
