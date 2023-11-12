import { CustomContainerStyle } from "./styles";

interface CustomContainerProps {
    children: JSX.Element;
}

const CustomContainer = ({ children }: CustomContainerProps) => {
    return <CustomContainerStyle>{children}</CustomContainerStyle>;
};

export default CustomContainer;
