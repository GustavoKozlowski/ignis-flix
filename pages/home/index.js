import { useEffect, React, useState } from "react";
import Filme from "../../components/CardFilme";
import FiltroInput from "../../components/FiltroInput";
import Logo from "../../components/Logo";
import Titulo from "../../components/Titulo";

export default function IgnisFlix() {
  const [filmes, setFilmes] = useState([]);


  return (
    <div>
      <Logo width={185} height={50} />
      <h1>Welcome</h1>
      <FiltroInput />
      <Titulo>Filmes</Titulo>
      {/* {<Filme />} */}
    </div>
  );
}
