import {
  ButtonContainerStyle,
  FormContainerStyle,
  InputContainerStyle,
  SpinnerStyle,
} from "./styles.tsx";
import { Input } from "@chakra-ui/react";
import PasswordInput from "../../input/passwordInput/PasswordInput.tsx";
import React from "react";
import PrimaryActionButtonNewUi from "../../button/primaryActionButtonNewUi/primaryActionButton.tsx";

interface FormContainerProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  login: () => void;
}

const FormContainer = ({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  login,
}: FormContainerProps) => {
  return (
    <>
      <FormContainerStyle>
        <InputContainerStyle>
          <>
            <Input
              variant={"primaryInput2"}
              placeholder={"Email"}
              name={email}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              placeholder="Senha"
            />

            {isLoading ? (
              <ButtonContainerStyle>
                <SpinnerStyle />
              </ButtonContainerStyle>
            ) : (
              <ButtonContainerStyle>
                <PrimaryActionButtonNewUi text="Entrar" onClick={login} />
              </ButtonContainerStyle>
            )}
          </>
        </InputContainerStyle>
      </FormContainerStyle>
    </>
  );
};

export default FormContainer;
