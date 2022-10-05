import React from "react";
import { Container } from "../components/MainContainer/styles";

function MyApp({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
    </Container>
    )
}

export default MyApp;
