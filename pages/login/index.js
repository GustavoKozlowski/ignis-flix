import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import StyledButton from "../../components/StyledButton";
import Logo from "../../components/Logo";
import TextInput from "../../components/TextInput";
import { ContainerForm, ContainerLogo } from "./styles";

// export const getStaticProps = async () => {
//   const res = await fetch("https://teste.ignisdigital.tec.br/login", {
//     method: 'POST',
//   });
//   const users = await res.json();

//   return {
//     props: { users },
//   };
// };

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const url = "https://teste.ignisdigital.tec.br/login";

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
    }).then((response) => {
      console.log(response.status)
      if(response.status === 200){
        response.json().then((data) => console.log("oia eu aqui didi:", data))
        return  router.push("/home");
      } 
        const error = response.json()
        console.log(error)
    });
    } catch (error) {
      return console.log(error);
      
    }
      
  };

  return (
    <ContainerForm>
      <ContainerLogo>
        <Logo width={185} height={50} />
      </ContainerLogo>
      <TextInput
        name="E-mail / username"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        name="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />
 
      <StyledButton handleclick={handleLogin}>Entrar</StyledButton>
    </ContainerForm>
  );
}
