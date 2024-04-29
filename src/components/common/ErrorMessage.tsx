import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <SErrorMessage>{message}</SErrorMessage>;
}

const SErrorMessage = styled.div`
  height: 14px;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: rgba(255, 61, 61, 1);
`;
