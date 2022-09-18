import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokedexTabs from "./components/PokedexTabs";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokedexTabs />
    </div>
  );
}

export default App;
