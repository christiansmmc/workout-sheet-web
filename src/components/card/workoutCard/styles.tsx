import styled from "styled-components";
import { FaDumbbell } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsPencil } from "react-icons/bs";

export const WorkoutCardStyle = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  min-height: 80px;
  border: 1px solid #323232;
  background-color: #323232;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const WorkoutCardText = styled.p`
  max-width: 125px;
`;

export const EnterIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  border: 1px solid #d60e0e;
  border-radius: 10px;
  background-color: #d60e0e;
  width: 64px;
  height: 40px;
  cursor: pointer;
`;

export const EnterIcon = styled(IoIosArrowForward)`
  font-size: 32px;
  margin: 0 auto;
  height: 100%;
`;

export const DumbbellIcon = styled(FaDumbbell)`
  font-size: 20px;
  color: white;
  width: 60px;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 112px;
  transform: translateY(-50%);
  width: 25px;
  height: 40px;
  cursor: pointer;
`;

export const EditIcon = styled(BsPencil)`
  font-size: 20px;
  margin: 0 auto;
  height: 100%;
`;
