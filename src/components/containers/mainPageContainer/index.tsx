import { MainPageContainerStyle } from "./styles.tsx";

interface MainPageContainerProps {
  children: JSX.Element;
}

const MainPageContainer = ({ children }: MainPageContainerProps) => {
  return <MainPageContainerStyle>{children}</MainPageContainerStyle>;
};

export default MainPageContainer;
