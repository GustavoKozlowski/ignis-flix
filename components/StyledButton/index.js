import React from "react";
import { StButton } from "./styles";

export default function StyledButton({ children, handleclick}) {
  return(
    <>
      <StButton onClick={handleclick}>
          {children}  
      </StButton>    
    </>
  )
}
