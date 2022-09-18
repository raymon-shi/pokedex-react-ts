import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import PokedexTable from "./PokedexTable";

const PokedexTabs = () => {
  const [generationTitle, setGenerationTitle] = useState<string | null>("All Generations");
  return (
    <Tabs id="controlled-tab" className="mb-3" defaultActiveKey={"All Generation"} onSelect={(e) => setGenerationTitle(e)}>
      <Tab eventKey="All Generations" title="All Generations">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 1 - Kanto Region" title="Generation 1">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 2 - Johto Region" title="Generation 2">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 3 - Hoenn Region" title="Generation 3">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 4 - Sinnoh Region" title="Generation 4">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 5 - Unova Region" title="Generation 5">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 6 - Kalos Region" title="Generation 6">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
      <Tab eventKey="Generation 7 - Alola Region" title="Generation 7">
        <PokedexTable generationTitle={generationTitle} />
      </Tab>
    </Tabs>
  );
};

export default PokedexTabs;
