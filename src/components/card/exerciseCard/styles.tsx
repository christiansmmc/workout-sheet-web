import styled from "styled-components";
import { PiTrashLight } from "react-icons/pi";

export const ExerciseCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  min-height: 64px;
  border: 1px solid #323232;
  background-color: #161616;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const ExercisesCardText = styled.p`
  font-size: 14px;
  max-width: 40%;
  padding-left: 8px;
`;

export const TrashIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 8px;
  height: 64px;
  width: 40px;
  cursor: pointer;
`;

export const TrashIcon = styled(PiTrashLight)`
  font-size: 24px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const InputContainer = styled.div`
  position: absolute;
  right: 136px;
`;

export const ExercisesCardTagContainerStyle = styled.div<{ $tagName: string }>`
  position: absolute;
  right: 52px;
  border-radius: 10px;
  padding: 2px 8px;
  width: 72px;
  height: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    tagColors[props.$tagName]?.backgroundColor ||
    tagColors.default.backgroundColor};
`;

export const ExercisesCardTagTextStyle = styled.p`
  font-size: 12px;
`;

interface TagColors {
  [key: string]: {
    backgroundColor: string;
  };
}

const tagColors: TagColors = {
  PEITO: {
    backgroundColor: "#5a5a5a",
  },
  TRICEPS: {
    backgroundColor: "#28456c",
  },
  OMBRO: {
    backgroundColor: "#2b593f",
  },
  PERNAS: {
    backgroundColor: "#373737",
  },
  COSTAS: {
    backgroundColor: "#69314c",
  },
  BICEPS: {
    backgroundColor: "#492f64",
  },
  default: {
    backgroundColor: "#808080",
  },
};
