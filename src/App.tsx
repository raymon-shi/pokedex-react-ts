import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokedexTabs from "./components/PokedexTabs";
import PokedexSearch from "./components/PokedexSearch";
import PokedexProfile from "./components/PokedexProfile";
import { Tabs, Tab } from "react-bootstrap";

function App() {
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
        <Tab eventKey="profile" title="Profile">
          <PokedexProfile id={2} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
