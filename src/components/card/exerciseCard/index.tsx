import { Input } from "@chakra-ui/react";
import {
  ExerciseCardContainer,
  ExercisesCardTagContainerStyle,
  ExercisesCardTagTextStyle,
  ExercisesCardText,
  InputContainer,
  TrashIcon,
  TrashIconContainer,
} from "./styles.tsx";
import React from "react";
import { capitalize } from "../../../utils/stringUtils.ts";

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
      <ExercisesCardText>{capitalize(exerciseName)}</ExercisesCardText>
      <InputContainer>
        <Input
          height={"36px"}
          variant={"loadInput"}
          size={"xs"}
          defaultValue={exerciseLoad}
          onBlur={onBlur}
          type={"number"}
          backgroundColor={"#323232"}
        />
      </InputContainer>
      <ExercisesCardTagContainerStyle $tagName={exerciseBodyPart}>
        <ExercisesCardTagTextStyle>
          {exerciseBodyPart}
        </ExercisesCardTagTextStyle>
      </ExercisesCardTagContainerStyle>
      <TrashIconContainer onClick={onClickIcon}>
        <TrashIcon />
      </TrashIconContainer>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
