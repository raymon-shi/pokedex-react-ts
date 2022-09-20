import React from "react";
import { IPokemon } from "../interface";
import PokedexSearchCard from "./PokedexSearchCard";

interface IPokedexSearchResultsProps {
  pokemonSearchResults: IPokemon[];
}

const PokedexSearchResults: React.FC<IPokedexSearchResultsProps> = ({ pokemonSearchResults }) => {
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
        />
      ))}
    </>
  );
};

export default PokedexSearchResults;
