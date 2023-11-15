import {
  BackIcon,
  BackIconContainer,
  LogoutIcon,
  StopwatchCardContainer,
} from "./styles.tsx";

interface StopwatchCardProps {
  useLogoutIcon?: boolean;
  backOnClick?: () => void;
}

const StopwatchCard = ({
  backOnClick,
  useLogoutIcon = false,
}: StopwatchCardProps) => {
  return (
    <>
      <StopwatchCardContainer>
        <BackIconContainer onClick={backOnClick}>
          {useLogoutIcon ? <LogoutIcon /> : <BackIcon />}
        </BackIconContainer>
        {/*<StopwatchCardText>Cronômetro</StopwatchCardText>*/}
        {/*<AccountIcon />*/}
      </StopwatchCardContainer>
    </>
  );
};

export default StopwatchCard;
