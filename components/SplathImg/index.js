import React from "react";
import { ContainerImage } from "./styles";
import Image from "next/image";

export default function SplatImg({ width, height, src, alt }) {
  return (
    <ContainerImage>
      <Image src={src} alt={alt} width={width} height={height} />
    </ContainerImage>
  );
}
