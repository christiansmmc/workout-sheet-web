import LoginPageContainer from "../components/loginPage/mainContainer";
import LoginBannerContainer from "../components/loginPage/bannerContainer";
import FormContainer from "../components/loginPage/formContainer";
import { useState } from "react";
import { useLoginMutation } from "../api/user.ts";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils.ts";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate, isLoading } = useLoginMutation(); // TODO ADD ON ERROR

  const navigate = useNavigate();

  if (isAuthenticated()) {
    navigate("/workout");
  }

  const login = () => {
    setEmail(email.toLowerCase());
    mutate({ email, password });
  };

  return (
    <LoginPageContainer>
      <>
        <LoginBannerContainer />
        <FormContainer
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          login={login}
        />
      </>
    </LoginPageContainer>
  );
};

export default Login;
