import React from "react";
import { Container } from "react-bootstrap";
import PokedexNavBar from "./PokedexNavBar";
import PokedexTabs from "./PokedexTabs";
import { IPokemonPartyMember } from "../interface";
import PokedexParty from "./PokedexParty";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexTableNavBar: React.FC<IProps> = ({ party, setParty }): React.ReactElement => {
  return (
    <>
      <PokedexNavBar />
      <Container>
        <h1>Pokedex Tables</h1>
        <PokedexParty party={party} setParty={setParty} />
        <PokedexTabs party={party} setParty={setParty} />
      </Container>
    </>
  );
};

export default PokedexTableNavBar;
