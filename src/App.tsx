import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokedexTabs from "./components/PokedexTabs";
import PokedexSearch from "./components/PokedexSearch";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokedexSearch />
      <PokedexTabs />
    </div>
  );
}

export default App;
