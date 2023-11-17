import styled from "styled-components";
import Logo from "../../../assets/images/mainPageImage-2.svg?react";

export const BannerContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImage = styled(Logo)`
  width: 85%;
  height: auto;
  //margin-top: 100px;
  margin-bottom: 50px;
`;

export const BannerText = styled.p`
  width: 100%;
  text-align: center;
  background-image: linear-gradient(to bottom, #161616 50%, #323232 50%);
  font-size: 24px;
  font-weight: bold;
`;
