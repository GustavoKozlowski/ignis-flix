import React from "react";
import Image from "next/image";

export default function Logo({width, height}) {
  return <Image width={width} height={height} src="/images/Logo.png" />;
}
