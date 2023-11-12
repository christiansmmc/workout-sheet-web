import {OptionIcon, OptionIconContainer, WorkoutCardContainer, WorkoutCardText} from "./styles";

interface WorkoutCardProps {
    text: string;
    onClick: () => void;
    onClickOption: () => void
}

const WorkoutCard = ({text, onClick, onClickOption}: WorkoutCardProps) => {
    return (
        <WorkoutCardContainer >
            <WorkoutCardText onClick={onClick}>{text}</WorkoutCardText>
            <OptionIconContainer onClick={onClickOption}>
                <OptionIcon/>
            </OptionIconContainer>
        </WorkoutCardContainer>
    );
};

export default WorkoutCard;
