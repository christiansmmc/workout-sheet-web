import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PrimaryActionButton from "../components/button/prymaryActionButton/primaryActionButton";
import CustomContainer from "../components/customContainer";
import PasswordInput from "../components/input/passwordInput/PasswordInput";
import PrimaryInput from "../components/input/primaryInput/PrimaryInput";
import {useRegisterMutation} from "../api/user.ts";
import {isAuthenticated} from "../utils/authUtils.ts";
import {Spinner} from "@chakra-ui/react";
import ErrorAlert from "../components/alert/error";

export default function RegisterPage() {
    const {mutate, isLoading, isError, isSuccess, error} = useRegisterMutation();
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/workout")
        }

        if (isError) {
            // @ts-expect-error I tried but couldn't type the error
            setErrorMessage(error.response ? error.response.data.message : error.message);
        }

        if (isSuccess) {
            navigate("/login");
        }
    }, [isError, isSuccess])

    const register = () => {
        // TODO validate fields and if password is the same
        mutate({
            email,
            password,
            client: {
                name,
                height: parseFloat(height),
                weight: parseFloat(weight),
            },
        });


    };

    return (
        <CustomContainer>
            <>
                <PrimaryInput
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    name="name"
                    placeholder="Nome"
                />
                <PrimaryInput
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    name="height"
                    placeholder="Altura"
                />
                <PrimaryInput
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    name="weight"
                    placeholder="Peso"
                />
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
                <PasswordInput
                    value={passwordConfirmation}
                    onChange={(event) =>
                        setPasswordConfirmation(event.target.value)
                    }
                    name="passwordConfirmation"
                    placeholder="Confirme sua senha"
                />

                {isLoading ? (
                    <Spinner size="md"/>
                ) : (
                    <PrimaryActionButton text="Criar conta" onClick={register}/>
                )}

                {isError && <ErrorAlert errorMessage={errorMessage}/>}
            </>
        </CustomContainer>
    );
}