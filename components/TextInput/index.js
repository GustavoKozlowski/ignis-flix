import React from "react";
import { InputName, InputValue, InputContainer } from "./styles";

export default function TextInput({ name, type, onChange }) {
  return (
    <InputContainer className="form-grupo">
      <InputName>{name}</InputName>
      <InputValue type={type} onChange={onChange} />
    </InputContainer>
  );
}
