import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import pokedex from "../data/pokedex.json";
import { IPokemon } from "../interface";
import { compareTwoStrings } from "string-similarity";
import PokedexSearchResults from "./PokedexSearchResults";

const PokedexSearch = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonSearchResults, setPokemonSearchResults] = useState<IPokemon[]>([]);
  console.log(pokemonName);

  const searchForPokemon = (pokemonSearchName: string) => {
    setPokemonSearchResults(
      pokedex.filter((pokemon) => compareTwoStrings(pokemon.name.english.toLowerCase(), pokemonSearchName.toLowerCase()) >= 0.35),
    );
  };

  console.log(pokemonSearchResults);

  return (
    <Container>
      <Form
        style={{ textAlign: "left" }}
        onSubmit={(e) => {
          e.preventDefault();
          searchForPokemon(pokemonName);
        }}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Enter the Pokemon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Pokemon you want to search!"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <br />
      <PokedexSearchResults pokemonSearchResults={pokemonSearchResults} />
    </Container>
  );
};

export default PokedexSearch;
