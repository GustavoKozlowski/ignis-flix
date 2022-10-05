import { useRouter } from "next/router";
import StyledButton from "../../components/StyledButton";
import Titulo from "../../components/Titulo";
import SplatImg from "../../components/SplathImg";
import TextoComum from "../../components/TextoComum";
import Logo from "../../components/Logo";
export default function SplathScreen() {
  const router = useRouter();
  const goLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <Logo />
      <Titulo>Do sofá pro seu celular</Titulo>
      <TextoComum>A revolução do cinema na sua casa.</TextoComum>
      <SplatImg
        src="/images/Persona.png"
        alt="Homem negro com celular na mão"
        width={450}
        height={600}
      />
      <StyledButton handleclick={goLogin}>Começar a ver filmes</StyledButton>
    </>
  );
}
