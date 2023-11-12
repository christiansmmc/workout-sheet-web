import styled from "styled-components";
import {BsThreeDots} from "react-icons/Bs";

export const ExerciseCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border: 1px solid #5a5a5a;
  background-color: #1e1e1e;
  border-radius: 2px;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const ExercisesCardText = styled.p`
  display: flex;
  flex-grow: 1;
  font-size: 14px;
  max-width: 40%;
  text-align: center;
  justify-content: center;
`;

interface TagColors {
    [key: string]: {
        backgroundColor: string;
    };
}

const tagColors: TagColors = {
    PEITO: {
        backgroundColor: "#2F7DB5",
    },
    TRICEPS: {
        backgroundColor: "#B56F2F",
    },
    theme3: {

        backgroundColor: 'lightgreen',
    },
    theme4: {
        backgroundColor: 'lavender',
    },
    theme5: {
        backgroundColor: 'lightsalmon',
    },
    default: {
        backgroundColor: 'white',
    },
};

export const ExercisesCardTag = styled.p<{ $tagName: string }>`
  position: absolute;
  right: 44px;
  font-size: 12px;
  border-radius: 2px;
  padding: 2px 8px;
  width: 64px;
  height: 24px;
  text-align: center;
  background-color: ${props => tagColors[props.$tagName]?.backgroundColor || tagColors.default.backgroundColor};;
`;

export const OptionIcon = styled(BsThreeDots)`
  position: absolute;
  right: 8px;
  font-size: 24px;
`;

export const InputContainer = styled.div`
  position: absolute;
  right: 116px;
`;
