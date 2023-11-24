import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

export const FormContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 200px);

  @media (min-height: 860px) {
    height: calc(100% - 312px);
  }
`;

export const InputContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 28px 28px;
  gap: 25px;
`;

export const ButtonContainerStyle = styled.div`
  width: 100%;
  padding: 0 28px 24px 28px;
`;

export const SpinnerStyle = styled(Spinner)`
  position: absolute;
  right: 50%;
  transform: translateX(-50%);
`;
