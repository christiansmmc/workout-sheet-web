import styled from "styled-components";
import Logo from "../../../assets/images/mainPageImage.svg?react";
import { IoIosArrowBack } from "react-icons/io";

export const BannerContainerStyle = styled.div`
  height: 200px;
  width: 100%;
  background-color: #d60e0e;
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-height: 860px) {
    height: 312px;
  }
`;

export const BannerImage = styled(Logo)`
  width: 50%;
  height: auto;
  margin-top: 25px;

  @media (min-height: 860px) {
    margin-top: 40px;
  }
`;

export const BannerText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media (min-height: 860px) {
    margin-top: 30px;
  }
`;

export const BannerText2 = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 32px;
`;

export const BackIconButton = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
`;
