import {
  BackIcon,
  BackIconButton,
  LoginBannerContainerStyle,
  BannerImage,
  BannerText,
} from "./styles.tsx";
import { useNavigate } from "react-router-dom";

const LoginBannerContainer = () => {
  const navigate = useNavigate();

  return (
    <LoginBannerContainerStyle>
      <BackIconButton onClick={() => navigate("/")}>
        <BackIcon />
      </BackIconButton>
      <BannerImage />
      <BannerText>Acesse sua conta</BannerText>
    </LoginBannerContainerStyle>
  );
};

export default LoginBannerContainer;
