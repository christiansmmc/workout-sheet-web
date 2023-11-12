import styled from "styled-components";

import {BsArrowLeft, BsPersonCircle} from "react-icons/Bs";
import {SlLogout} from "react-icons/sl";

export const StopwatchCardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #5a5a5a;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StopwatchCardText = styled.p`
  font-size: 15px;
`;

export const AccountIcon = styled(BsPersonCircle)`
  color: #5a5a5a;
  font-size: 28px;
  position: absolute;
  right: 28px;
  cursor: pointer;
`;

export const BackIconContainer = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`

export const BackIcon = styled(BsArrowLeft)`
  color: #5a5a5a;
  font-size: 24px;
  cursor: pointer;
`

export const LogoutIcon = styled(SlLogout)`
  color: #5a5a5a;
  font-size: 24px;
  cursor: pointer;
`