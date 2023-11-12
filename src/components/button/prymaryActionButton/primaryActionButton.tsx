import { Button } from "@chakra-ui/react";

interface PrimaryActionButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryActionButton = ({ text, onClick }: PrimaryActionButtonProps) => {
    return (
        <>
            <Button variant={"primaryActionButton"} onClick={onClick}>
                {text}
            </Button>
        </>
    );
};

export default PrimaryActionButton;
