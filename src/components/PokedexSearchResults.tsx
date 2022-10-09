import React from "react";
import { IPokemon, IPokemonPartyMember } from "../interface";
import PokedexSearchCard from "./PokedexSearchCard";

interface IPokedexSearchResultsProps {
  pokemonSearchResults: IPokemon[];
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexSearchResults: React.FC<IPokedexSearchResultsProps> = ({ pokemonSearchResults, party, setParty }) => {
  return (
    <>
      {pokemonSearchResults.map((pokemon) => (
        <PokedexSearchCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name.english}
          type={pokemon.type}
          species={pokemon.species}
          description={pokemon.description}
          thumbnail={pokemon.image.thumbnail}
          party={party}
          setParty={setParty}
        />
      ))}
    </>
  );
};

export default PokedexSearchResults;
