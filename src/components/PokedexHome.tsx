import React, { useState } from "react";
import PokedexTabs from "./PokedexTabs";
import PokedexSearch from "./PokedexSearch";
import { Tabs, Tab, Container, Button, Offcanvas } from "react-bootstrap";
import PokedexNavBar from "./PokedexNavBar";
import PokedexParty from "./PokedexParty";

const PokedexHome = () => {
  return (
    <div className="App">
      <PokedexNavBar />
      <h1>Pokedex</h1>
      <PokedexParty />
      <Container>
        <Tabs defaultActiveKey="search" id="uncontrolled-tab" className="mb-3">
          <Tab eventKey="search" title="Search">
            <PokedexSearch />
          </Tab>
          <Tab eventKey="table" title="Table">
            <PokedexTabs />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default PokedexHome;
