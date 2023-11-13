import { useNavigate } from "react-router-dom";
import PrimaryActionButton from "../components/button/prymaryActionButton/primaryActionButton";
import CustomContainer from "../components/containers/customContainer";
import { useEffect } from "react";
import { isAuthenticated } from "../utils/authUtils.ts";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/workout");
    }
  }, []);

  const toLoginRoute = async () => {
    navigate("/login");
  };

  const toRegisterRoute = async () => {
    navigate("/register");
  };

  return (
    <CustomContainer>
      <>
        <PrimaryActionButton text="Entrar" onClick={toLoginRoute} />
        <PrimaryActionButton text="Criar conta" onClick={toRegisterRoute} />
      </>
    </CustomContainer>
  );
};

export default Login;
