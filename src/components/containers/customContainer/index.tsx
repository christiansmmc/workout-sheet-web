import { CustomContainerStyle } from "./styles.tsx";

interface CustomContainerProps {
  children: JSX.Element;
}

const CustomContainer = ({ children }: CustomContainerProps) => {
  return <CustomContainerStyle>{children}</CustomContainerStyle>;
};

export default CustomContainer;
