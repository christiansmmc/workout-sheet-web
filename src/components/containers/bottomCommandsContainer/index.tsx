import {
  BackIcon,
  BackIconContainer,
  BottomCommandsContainerStyle,
} from "./styles.tsx";

interface BottomCommandsContainerProps {
  onClick?: () => void;
}

const BottomCommandsContainer = ({ onClick }: BottomCommandsContainerProps) => {
  return (
    <>
      <BottomCommandsContainerStyle>
        <BackIconContainer onClick={onClick}>
          <BackIcon />
        </BackIconContainer>
      </BottomCommandsContainerStyle>
    </>
  );
};

export default BottomCommandsContainer;
