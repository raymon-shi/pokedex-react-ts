import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import pokedex from "../data/pokedex.json";
import { IPokemon } from "../interface";
import { compareTwoStrings } from "string-similarity";
import PokedexSearchResults from "./PokedexSearchResults";

const PokedexSearch = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonSearchResults, setPokemonSearchResults] = useState<IPokemon[]>([]);
  console.log(pokemonName);

  const searchForPokemon = (pokemonSearchName: string): void => {
    setPokemonSearchResults(
      pokedex.filter((pokemon) => compareTwoStrings(pokemon.name.english.toLowerCase(), pokemonSearchName.toLowerCase()) >= 0.5),
    );
  };

  return (
    <Container>
      <Form style={{ textAlign: "left" }}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Enter the Pokemon name you want to search for</Form.Label>
          <Form.Control type="text" placeholder="Enter the Pokemon you want to search!" onChange={(e) => searchForPokemon(e.target.value)} />
        </Form.Group>
      </Form>
      <br />
      <PokedexSearchResults pokemonSearchResults={pokemonSearchResults} />
    </Container>
  );
};

export default PokedexSearch;
