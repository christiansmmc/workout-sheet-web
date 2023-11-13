import styled from "styled-components";

import { BsArrowLeft } from "react-icons/Bs";

export const BottomCommandsContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0;
  //border-top: 1px solid #5a5a5a;
  background-color: #191919;
  display: flex;
  align-items: center;
`;

export const BackIconContainer = styled.div`
  cursor: pointer;
  width: 48px;
  padding-left: 28px;
`;

export const BackIcon = styled(BsArrowLeft)`
  color: #5a5a5a;
  font-size: 24px;
  cursor: pointer;
`;
