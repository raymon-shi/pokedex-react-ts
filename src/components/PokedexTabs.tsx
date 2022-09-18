import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import PokedexTable from "./PokedexTable";

const PokedexTabs = () => {
  const [generationTitle, setGenerationTitle] = useState<string | null>("All Generations");
  return (
    <Tabs id="controlled-tab" className="mb-3" defaultActiveKey={"All Generation"} onSelect={(e) => setGenerationTitle(e)}>
      <Tab eventKey="All Generation" title="All Generation">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 1" title="Generation 1">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 2" title="Generation 2">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 3" title="Generation 3">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 4" title="Generation 4">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 5" title="Generation 5">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 6" title="Generation 6">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 7" title="Generation 7">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
    </Tabs>
  );
};

export default PokedexTabs;
