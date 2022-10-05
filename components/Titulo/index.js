import React from "react";
import { Title } from "./styles";

export default function Titulo({ children }) {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
}
