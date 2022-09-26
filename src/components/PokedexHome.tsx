import React from "react";
import PokedexTabs from "./PokedexTabs";
import PokedexSearch from "./PokedexSearch";
import { Tabs, Tab } from "react-bootstrap";

const PokedexHome = () => {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Tabs defaultActiveKey="search" id="uncontrolled-tab" className="mb-3">
        <Tab eventKey="search" title="Search">
          <PokedexSearch />
        </Tab>
        <Tab eventKey="table" title="Table">
          <PokedexTabs />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PokedexHome;
