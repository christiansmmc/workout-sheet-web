import styled from "styled-components";

import { BsArrowLeft } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

export const HeaderContainerStyle = styled.div`
  width: 100%;
  height: 56px;
  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #5a5a5a;
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
