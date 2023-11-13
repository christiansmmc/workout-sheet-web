import styled from "styled-components";

import { BsThreeDots } from "react-icons/bs";

export const WorkoutCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border: 1px solid #5a5a5a;
  background-color: #1e1e1e;
  border-radius: 2px;
  cursor: pointer;
`;

export const WorkoutCardText = styled.p`
  width: 100%;
  font-size: 16px;
  text-align: center;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  height: 48px;
  width: 48px;
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
