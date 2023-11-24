import styled from "styled-components";

export const CardContainerStyle = styled.div<{ $maxHeight?: string }>`
  max-height: calc(100% - ${(props) => props.$maxHeight || "0"});
  overflow: auto;
  width: 100%;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
