import { Button } from "@chakra-ui/react";

interface PrimaryActionButtonProps {
  text: string;
  onClick: () => void;
}

const PrimaryActionButtonNewUi = ({
  text,
  onClick,
}: PrimaryActionButtonProps) => {
  return (
    <>
      <Button variant={"PrimaryActionButtonNewUi"} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export default PrimaryActionButtonNewUi;
