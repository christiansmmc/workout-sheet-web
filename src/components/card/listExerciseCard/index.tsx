import {
  ExerciseCardContainer,
  ExerciseCardTag,
  ExerciseCardText,
} from "./styles.tsx";

interface ListExerciseCardProps {
  exerciseName: string;
  exerciseBodyPart: string;
  onClick: () => void;
}

const ExerciseCard = ({
  exerciseName,
  exerciseBodyPart,
  onClick,
}: ListExerciseCardProps) => {
  return (
    <ExerciseCardContainer onClick={onClick}>
      <ExerciseCardText>{exerciseName}</ExerciseCardText>
      <ExerciseCardTag $tagName={exerciseBodyPart}>
        {exerciseBodyPart}
      </ExerciseCardTag>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
