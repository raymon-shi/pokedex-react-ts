import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexHome from "./components/PokedexHome";
import PokedexProfile from "./components/PokedexProfile";
import PokedexTableNavBar from "./components/PokedexTableNavBar";

import { IPokemonPartyMember } from "./interface";

const App = () => {
  const [party, setParty] = useState<IPokemonPartyMember[]>([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokedexHome party={party} setParty={setParty} />} />
          <Route path="/profile/:id/:pokemonName" element={<PokedexProfile party={party} setParty={setParty} />} />
          <Route path="/table" element={<PokedexTableNavBar party={party} setParty={setParty} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
