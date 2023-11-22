import { MainPageContainerStyle } from "./styles.tsx";

interface RegisterPageContainerProps {
  children: JSX.Element;
}

const RegisterPageContainer = ({ children }: RegisterPageContainerProps) => {
  return (
    <>
      <MainPageContainerStyle>{children}</MainPageContainerStyle>
    </>
  );
};

export default RegisterPageContainer;
