import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface PasswordInputProps {
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}

const PasswordInput = ({
    name,
    value,
    onChange,
    placeholder,
}: PasswordInputProps) => {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    return (
        <InputGroup size="md">
            <Input
                variant={"primaryInput"}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            <InputRightElement width="4.5rem">
                <div onClick={handleClick}>
                    {show ? (
                        <AiOutlineEyeInvisible size={"20"} />
                    ) : (
                        <AiOutlineEye size={"20"} />
                    )}
                </div>
            </InputRightElement>
        </InputGroup>
    );
};

export default PasswordInput;
