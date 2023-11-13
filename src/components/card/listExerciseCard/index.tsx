import {
  ListExerciseCardContainer,
  ListExerciseCardTag,
  ListExerciseCardText,
} from "./styles.tsx";

interface ListExerciseCardProps {
  exerciseName: string;
  exerciseBodyPart: string;
  onClick: () => void;
}

const ListExerciseCard = ({
  exerciseName,
  exerciseBodyPart,
  onClick,
}: ListExerciseCardProps) => {
  return (
    <ListExerciseCardContainer onClick={onClick}>
      <ListExerciseCardText>{exerciseName}</ListExerciseCardText>
      <ListExerciseCardTag $tagName={exerciseBodyPart}>
        {exerciseBodyPart}
      </ListExerciseCardTag>
    </ListExerciseCardContainer>
  );
};

export default ListExerciseCard;
