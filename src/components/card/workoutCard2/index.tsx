import {
  DumbbellIcon,
  EditIcon,
  EditIconContainer,
  EnterIcon,
  EnterIconContainer,
  WorkoutCardStyle,
  WorkoutCardText,
} from "./styles";

interface WorkoutCardProps {
  text: string;
  enterButtonOnClick: () => void;
  editButtonOnClick: () => void;
}

const WorkoutCard2 = ({
  text,
  enterButtonOnClick,
  editButtonOnClick,
}: WorkoutCardProps) => {
  return (
    <WorkoutCardStyle>
      <DumbbellIcon />
      <WorkoutCardText>{text}</WorkoutCardText>
      <EditIconContainer onClick={editButtonOnClick}>
        <EditIcon />
      </EditIconContainer>
      <EnterIconContainer onClick={enterButtonOnClick}>
        <EnterIcon />
      </EnterIconContainer>
    </WorkoutCardStyle>
  );
};

export default WorkoutCard2;
