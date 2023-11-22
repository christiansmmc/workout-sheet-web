import { ContainerStyle } from "./styles.tsx";

interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
