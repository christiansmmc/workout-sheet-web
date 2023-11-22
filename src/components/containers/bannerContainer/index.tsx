import {
  BackIcon,
  BackIconButton,
  BannerContainerStyle,
  BannerText,
  BannerText2,
  LoginPageBannerImage,
  RegisterPageBannerImage,
} from "./styles.tsx";
import { useNavigate } from "react-router-dom";

interface BannerContainerProps {
  primaryText: string;
  secondaryText: string;
  type: "LOGIN" | "REGISTER";
}

const BannerContainer = ({
  primaryText,
  secondaryText,
  type,
}: BannerContainerProps) => {
  const navigate = useNavigate();

  return (
    <BannerContainerStyle>
      <BackIconButton onClick={() => navigate("/")}>
        <BackIcon />
      </BackIconButton>
      {type == "REGISTER" ? (
        <RegisterPageBannerImage />
      ) : (
        <LoginPageBannerImage />
      )}
      <BannerText>{primaryText}</BannerText>
      <BannerText2>{secondaryText}</BannerText2>
    </BannerContainerStyle>
  );
};

export default BannerContainer;
