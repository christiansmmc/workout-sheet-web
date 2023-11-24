import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthenticated } from "../utils/authUtils.ts";
import BannerContainer from "../components/mainPage/bannerContainer";
import ButtonContainer from "../components/mainPage/buttonContainer";
import PrimaryActionButtonNewUi from "../components/button/primaryActionButtonNewUi/primaryActionButton.tsx";
import MainPageContainer from "../components/containers/mainPageContainer";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/workout");
    }
  }, []);

  return (
    <MainPageContainer>
      <>
        <BannerContainer />
        <ButtonContainer>
          <>
            <PrimaryActionButtonNewUi
              text="Entrar"
              onClick={() => {
                navigate("/login");
              }}
            />
            <PrimaryActionButtonNewUi
              text="Criar conta"
              onClick={() => {
                navigate("/register");
              }}
            />
          </>
        </ButtonContainer>
      </>
    </MainPageContainer>
  );
};

export default Main;
