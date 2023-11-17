import {
  BackIcon,
  BackIconButton,
  BannerContainerStyle,
  BannerImage,
  BannerText,
  BannerText2,
} from "./styles.tsx";
import { useNavigate } from "react-router-dom";

const BannerContainer = () => {
  const navigate = useNavigate();

  return (
    <BannerContainerStyle>
      <BackIconButton onClick={() => navigate("/")}>
        <BackIcon />
      </BackIconButton>
      <BannerImage />
      <BannerText>Crie sua conta</BannerText>
      <BannerText2>
        Comece hoje a acompanhar seu treino mais de perto
      </BannerText2>
    </BannerContainerStyle>
  );
};

export default BannerContainer;
