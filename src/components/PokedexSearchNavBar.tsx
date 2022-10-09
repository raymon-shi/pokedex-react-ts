import React from "react";
import { Container } from "react-bootstrap";
import PokedexNavBar from "./PokedexNavBar";
import PokedexSearch from "./PokedexSearch";

const PokedexSearchNavBar = () => {
  return (
    <>
      <PokedexNavBar />
      <Container>
        <h1>Pokedex Search</h1>
        <PokedexSearch />
      </Container>
    </>
  );
};

export default PokedexSearchNavBar;
