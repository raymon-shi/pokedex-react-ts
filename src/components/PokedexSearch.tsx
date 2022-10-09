import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import pokedex from "../data/pokedex.json";
import { IPokemon, IPokemonPartyMember } from "../interface";
import { compareTwoStrings } from "string-similarity";
import PokedexSearchResults from "./PokedexSearchResults";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexSearch: React.FC<IProps> = ({ party, setParty }): React.ReactElement => {
  // const [pokemonName] = useState<string>("");
  const [pokemonSearchResults, setPokemonSearchResults] = useState<IPokemon[]>([]);

  const searchForPokemon = (pokemonSearchName: string): void => {
    setPokemonSearchResults(
      pokedex.filter((pokemon: IPokemon): boolean => compareTwoStrings(pokemon.name.english.toLowerCase(), pokemonSearchName.toLowerCase()) >= 0.5),
    );
  };

  return (
    <Container>
      <Form style={{ textAlign: "left" }}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Enter the Pokemon name you want to search for</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Pokemon you want to search!"
            autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => searchForPokemon(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <PokedexSearchResults pokemonSearchResults={pokemonSearchResults} party={party} setParty={setParty} />
    </Container>
  );
};

export default PokedexSearch;
