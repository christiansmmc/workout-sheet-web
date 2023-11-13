import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/user.ts";
import ErrorAlert from "../components/alert/error";
import PrimaryActionButton from "../components/button/prymaryActionButton/primaryActionButton";
import CustomContainer from "../components/containers/customContainer";
import PasswordInput from "../components/input/passwordInput/PasswordInput";
import PrimaryInput from "../components/input/primaryInput/PrimaryInput";
import { isAuthenticated } from "../utils/authUtils.ts";
import BottomCommandsContainer from "../components/containers/bottomCommandsContainer";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate, isLoading, isError, error } = useLoginMutation();

  const navigate = useNavigate();

  if (isAuthenticated()) {
    navigate("/workout");
  }

  const login = () => {
    setEmail(email.toLowerCase());
    mutate({ email, password });
  };

  return (
    <CustomContainer>
      <>
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          placeholder="Email"
        />
        <PasswordInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          placeholder="Senha"
        />

        {isLoading ? (
          <Spinner size="md" />
        ) : (
          <PrimaryActionButton text="Entrar" onClick={login} />
        )}

        {isError && (
          <ErrorAlert
            errorMessage={
              error?.response ? error?.response.data.message : error?.message
            }
          />
        )}
        <BottomCommandsContainer onClick={() => navigate("/")} />
      </>
    </CustomContainer>
  );
};

export default Login;
