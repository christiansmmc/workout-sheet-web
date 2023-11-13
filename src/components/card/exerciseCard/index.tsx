import { Input } from "@chakra-ui/react";
import {
  ExerciseCardContainer,
  ExercisesCardTag,
  ExercisesCardText,
  InputContainer,
  OptionIconContainer,
  TrashIcon,
} from "./styles.tsx";
import React from "react";

interface ExerciseCardProps {
  exerciseName: string;
  exerciseLoad: number;
  exerciseBodyPart: string;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: () => void;
}

const ExerciseCard = ({
  exerciseName,
  exerciseLoad,
  exerciseBodyPart,
  onBlur,
  onClickIcon,
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
      <OptionIconContainer onClick={onClickIcon}>
        <TrashIcon />
      </OptionIconContainer>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
