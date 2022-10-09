import React from "react";
import { Container } from "react-bootstrap";
import PokedexNavBar from "./PokedexNavBar";
import PokedexTabs from "./PokedexTabs";

const PokedexTableNavBar = () => {
  return (
    <>
      <PokedexNavBar />
      <Container>
        <h1>Pokedex Tables</h1>
        <PokedexTabs />
      </Container>
    </>
  );
};

export default PokedexTableNavBar;
