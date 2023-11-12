import { Input } from "@chakra-ui/react";
import {
  ExerciseCardContainer,
  ExercisesCardTag,
  ExercisesCardText,
  InputContainer,
  OptionIcon,
  OptionIconContainer,
} from "./styles.tsx";
import React from "react";

interface ExerciseCardProps {
  exerciseName: string;
  exerciseLoad: number;
  exerciseBodyPart: string;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickOption: () => void;
}

const ExerciseCard = ({
  exerciseName,
  exerciseLoad,
  exerciseBodyPart,
  onBlur,
  onClickOption,
}: ExerciseCardProps) => {
  return (
    <ExerciseCardContainer>
      <ExercisesCardText>{exerciseName}</ExercisesCardText>
      <InputContainer>
        <Input
          variant={"loadInput"}
          size={"md"}
          defaultValue={exerciseLoad}
          onBlur={onBlur}
          type={"number"}
        />
      </InputContainer>
      <ExercisesCardTag $tagName={exerciseBodyPart}>
        {exerciseBodyPart}
      </ExercisesCardTag>
      <OptionIconContainer onClick={onClickOption}>
        <OptionIcon />
      </OptionIconContainer>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
