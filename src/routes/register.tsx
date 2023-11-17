import RegisterPageContainer from "../components/registerPage/mainContainer";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils.ts";
import FormContainer from "../components/registerPage/formContainer";
import BannerContainer from "../components/containers/bannerContainer";
import { useState } from "react";
import { useRegisterMutation } from "../api/user.ts";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const { mutate, isLoading } = useRegisterMutation(); // TODO ADD ON ERROR

  const navigate = useNavigate();

  if (isAuthenticated()) {
    navigate("/workout");
  }

  const register = () => {
    mutate({ email, password, client: { name, height, weight } });
  };

  return (
    <RegisterPageContainer>
      <>
        <BannerContainer
          primaryText={"Crie sua conta"}
          secondaryText={"COmece hoje a acompanhar seu treino mais de perto"}
          type={"REGISTER"}
        />
        <FormContainer
          name={name}
          setName={setName}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
          register={register}
          isLoading={isLoading}
        />
      </>
    </RegisterPageContainer>
  );
};

export default Register;
