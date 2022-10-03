import React from "react";
import { useState } from "react";

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

  const handleLogin = async (e) => {
    e.preventDefault();
    fetch("https://teste.ignisdigital.tec.br/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
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
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
