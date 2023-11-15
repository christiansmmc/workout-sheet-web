import styled from "styled-components";

import { BsThreeDots } from "react-icons/bs";

export const WorkoutCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  border: 1px solid #5a5a5a;
  background-color: #1e1e1e;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorkoutCardText = styled.p`
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  text-align: center;
`;

export const OptionIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 20px 10px;
`;

export const OptionIcon = styled(BsThreeDots)`
  font-size: 26px;
`;
