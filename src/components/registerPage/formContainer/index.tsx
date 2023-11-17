import {
  ButtonContainerStyle,
  FormContainerStyle,
  InputContainerStyle,
} from "./styles.tsx";
import { Input } from "@chakra-ui/react";
import PrimaryActionButtonNewUi from "../../button/primaryActionButtonNewUi/primaryActionButton.tsx";
import React from "react";
import { SpinnerStyle } from "../../loginPage/formContainer/styles.tsx";
import PasswordInput from "../../input/passwordInput/PasswordInput.tsx";

interface FormContainerProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  weight: number;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordConfirmation: string;
  setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  register: () => void;
}

const FormContainer = ({
  name,
  setName,
  email,
  setEmail,
  height,
  setHeight,
  weight,
  setWeight,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  isLoading,
  register,
}: FormContainerProps) => {
  return (
    <>
      <FormContainerStyle>
        <InputContainerStyle>
          <Input
            placeholder={"Nome"}
            name={"name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant={"primaryInput2"}
          />
          <Input
            type={"number"}
            placeholder={"Altura"}
            name={"height"}
            value={height !== 0 ? height : ""}
            onChange={(event) => setHeight(parseFloat(event.target.value))}
            variant={"primaryInput2"}
          />
          <Input
            type={"number"}
            placeholder={"Peso"}
            name={"weight"}
            value={weight !== 0 ? weight : ""}
            onChange={(event) => setWeight(parseFloat(event.target.value))}
            variant={"primaryInput2"}
          />
          <Input
            placeholder={"Email"}
            name={"email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            variant={"primaryInput2"}
          />
          <PasswordInput
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            placeholder="Senha"
          />
          <PasswordInput
            placeholder={"Confirme sua senha"}
            name={"confirm-password"}
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </InputContainerStyle>
        {isLoading ? (
          <ButtonContainerStyle>
            <SpinnerStyle />
          </ButtonContainerStyle>
        ) : (
          <ButtonContainerStyle>
            <PrimaryActionButtonNewUi text="Criar conta" onClick={register} />
          </ButtonContainerStyle>
        )}
      </FormContainerStyle>
    </>
  );
};

export default FormContainer;
