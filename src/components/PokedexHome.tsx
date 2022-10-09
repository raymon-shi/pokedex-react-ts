import React from "react";
import PokedexSearch from "./PokedexSearch";
import { Tabs, Tab, Container } from "react-bootstrap";
import PokedexNavBar from "./PokedexNavBar";
import PokedexParty from "./PokedexParty";
import { IPokemonPartyMember } from "../interface";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexHome: React.FC<IProps> = ({ party, setParty }) => {
  return (
    <div className="App">
      <PokedexNavBar />
      <h1>Pokedex</h1>
      <PokedexParty party={party} setParty={setParty} />
      <Container>
        <Tabs defaultActiveKey="search" id="uncontrolled-tab" className="mb-3">
          <Tab eventKey="search" title="Search">
            <PokedexSearch party={party} setParty={setParty} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default PokedexHome;
