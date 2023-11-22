import styled from "styled-components";

export const FormContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

  @media (min-height: 860px) {
    position: absolute;
    bottom: 24px;
  }
`;
