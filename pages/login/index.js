import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import StyledButton from "../../components/StyledButton";
import Logo from "../../components/Logo";

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
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
    }).then((res) =>
      res.json().then((data) => console.log("oia eu aqui didi:", data))
    );
    router.push("/splath");
  };

  return (
    <div>
       <Logo />
      <h1>Bem vindo</h1>
      <form>
        <div className="form-grupo">
          <label>E-mail / username </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
          />
        </div>
        <div className="form-grupo">
          <label>Senha</label>
          <input
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="password"
          />
          <h2>{email}</h2>
          <h2>{senha}</h2>
          <StyledButton handleclick={handleLogin}>Entrar</StyledButton>
        </div>
      </form>
    </div>
  );
}
