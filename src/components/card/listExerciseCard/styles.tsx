import styled from "styled-components";

export const ListExerciseCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border: 1px solid #5a5a5a;
  background-color: #1e1e1e;
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ListExerciseCardText = styled.p`
  max-width: 60%;
  padding-left: 8px;
  font-size: 16px;
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

export const ListExerciseCardTag = styled.p<{ $tagName: string }>`
  position: absolute;
  right: 40px;
  font-size: 16px;
  border-radius: 2px;
  width: 80px;
  height: 24px;
  text-align: center;
  background-color: ${(props) =>
    tagColors[props.$tagName]?.backgroundColor ||
    tagColors.default.backgroundColor};
`;
