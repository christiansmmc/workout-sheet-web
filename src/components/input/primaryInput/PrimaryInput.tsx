import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface PrimaryInputProps {
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}

const PrimaryInput = ({
    name,
    value,
    onChange,
    placeholder,
}: PrimaryInputProps) => {
    return (
        <>
            <Input
                variant={"primaryInput"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default PrimaryInput;
