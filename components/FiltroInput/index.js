import React from "react";
import { InputValue, InputContainer } from "./styles";

export default function FiltroInput({ type, onChange }) {
  return (
    <InputContainer className="form-grupo">
      <InputValue type={type} onChange={onChange} />
    </InputContainer>
  );
}