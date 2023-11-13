import { Input } from "@chakra-ui/react";
import {
  ExerciseCardContainer,
  ExercisesCardTag,
  ExercisesCardText,
  InputContainer,
  OptionIcon,
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
  iconType: "options" | "remove";
}

const ExerciseCard = ({
  exerciseName,
  exerciseLoad,
  exerciseBodyPart,
  onBlur,
  onClickIcon,
  iconType,
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
        {iconType === "options" ? <OptionIcon /> : <TrashIcon />}
      </OptionIconContainer>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
