import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexHome from "./components/PokedexHome";
import PokedexProfile from "./components/PokedexProfile";
import PokedexSearchNavBar from "./components/PokedexSearchNavBar";
import PokedexTableNavBar from "./components/PokedexTableNavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokedexHome />} />
          <Route path="/profile/:id/:pokemonName" element={<PokedexProfile />} />
          <Route path="/search" element={<PokedexSearchNavBar />} />
          <Route path="/table" element={<PokedexTableNavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
