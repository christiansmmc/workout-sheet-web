import {
  BackIconStyle,
  BackIconContainerStyle,
  LogoutIconStyle,
  HeaderContainerStyle,
} from "./styles.tsx";

interface StopwatchCardProps {
  useLogoutIcon?: boolean;
  backOnClick?: () => void;
}

const HeaderContainer = ({
  backOnClick,
  useLogoutIcon = false,
}: StopwatchCardProps) => {
  return (
    <>
      <HeaderContainerStyle>
        <BackIconContainerStyle onClick={backOnClick}>
          {useLogoutIcon ? <LogoutIconStyle /> : <BackIconStyle />}
        </BackIconContainerStyle>
      </HeaderContainerStyle>
    </>
  );
};

export default HeaderContainer;
