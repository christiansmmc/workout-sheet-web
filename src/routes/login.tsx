import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/user.ts";
import ErrorAlert from "../components/alert/error";
import PrimaryActionButton from "../components/button/prymaryActionButton/primaryActionButton";
import CustomContainer from "../components/customContainer";
import PasswordInput from "../components/input/passwordInput/PasswordInput";
import PrimaryInput from "../components/input/primaryInput/PrimaryInput";
import { isAuthenticated, setToken } from "../utils/authUtils.ts";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { mutate, isLoading, isError, isSuccess, error, data } =
        useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/workout");
        }

        if (isSuccess && data) {
            setToken(data.access_token);
            navigate("/workout");
        }
    }, [isSuccess]);

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
                            error?.response
                                ? error?.response.data.message
                                : error?.message
                        }
                    />
                )}
            </>
        </CustomContainer>
    );
};

export default Login;
