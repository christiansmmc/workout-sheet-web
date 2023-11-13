import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { PiTrashLight } from "react-icons/pi";

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
  font-size: 14px;
  max-width: 40%;
  padding-left: 8px;
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

export const ExercisesCardTag = styled.p<{ $tagName: string }>`
  position: absolute;
  right: 56px;
  font-size: 12px;
  border-radius: 2px;
  padding: 2px 8px;
  width: 72px;
  height: 24px;
  text-align: center;
  background-color: ${(props) =>
    tagColors[props.$tagName]?.backgroundColor ||
    tagColors.default.backgroundColor};
`;

export const OptionIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 8px;
  height: 48px;
  width: 40px;
  cursor: pointer;
`;

export const OptionIcon = styled(BsThreeDots)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 26px;
`;

export const InputContainer = styled.div`
  position: absolute;
  right: 142px;
`;

export const TrashIcon = styled(PiTrashLight)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 24px;
`;
