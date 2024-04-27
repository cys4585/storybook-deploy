import { CaptionText, LabelText, TitleText } from "../../../styles/common";
import {
  CardExpiration,
  CardExpirationErrorState,
  CardExpirationKeys,
} from "../../../hooks/useCardExpiration";
import { useEffect, useRef } from "react";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";

export interface CardExpirationDateInputProps {
  valueState: CardExpiration;
  errorState: CardExpirationErrorState;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    targetKey: CardExpirationKeys
  ) => void;
}

export default function CardExpirationDateInput({
  valueState,
  errorState,
  onChange,
}: CardExpirationDateInputProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    targetKey: CardExpirationKeys
  ) => {
    const { value } = event.target;

    if (value.length < 2) {
      onChange(event, targetKey);
      return;
    }
    if (targetKey === "month") {
      onChange(event, targetKey);
      secondInputRef.current?.focus();
      return;
    }
    if (targetKey === "year") {
      onChange(event, targetKey);
    }
  };

  return (
    <CardDateContainer>
      <div>
        <TitleText>카드 유효기간을 입력해 주세요</TitleText>
        <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      </div>
      <CardDateBox>
        <LabelText>유효기간</LabelText>
        <InputContainer>
          <Input
            ref={firstInputRef}
            maxLength={2}
            placeholder="MM"
            value={valueState.month}
            isError={errorState.isError.month}
            onChange={(event) => onInputChange(event, "month")}
          />
          <Input
            ref={secondInputRef}
            maxLength={2}
            placeholder="YY"
            value={valueState.year}
            isError={errorState.isError.year}
            onChange={(event) => onInputChange(event, "year")}
          />
        </InputContainer>
        <ErrorMessage message={errorState.errorMessage} />
      </CardDateBox>
    </CardDateContainer>
  );
}

const CardDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardDateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
