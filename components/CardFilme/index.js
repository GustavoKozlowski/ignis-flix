import Image from "next/image";
import React from "react";
import {
  CardContainer,
  CardDescricao,
  SinopseFilme,
  TituloFilme,
} from "./styles";

export default function Filme({titulo, src, resumo}) {
  return (
    <CardContainer>
      <Image width={100} height={300} src={src} />
      <CardDescricao>
        <TituloFilme>{titulo}</TituloFilme>
        <SinopseFilme>
          {resumo}
        </SinopseFilme>
      </CardDescricao>
    </CardContainer>
  );
}
