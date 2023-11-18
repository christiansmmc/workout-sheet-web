import styled from "styled-components";

import { BsArrowLeft } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

export const HeaderContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 56px;
  position: absolute;
  top: 0;
  border-top: 1px solid #323232;
  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackIconContainerStyle = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

export const BackIconStyle = styled(BsArrowLeft)`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const LogoutIconStyle = styled(SlLogout)`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
