import { MainPageContainerStyle } from "./styles.tsx";

interface CustomContainerProps {
  children: JSX.Element;
}

const LoginPageContainer = ({ children }: CustomContainerProps) => {
  return <MainPageContainerStyle>{children}</MainPageContainerStyle>;
};

export default LoginPageContainer;
