import React from "react";
import { Table } from "react-bootstrap";
import pokedex from "../data/pokedex.json";
import { IPokemon } from "../interface";

interface IProps {
  generationTitle: string | null;
}

const gen1: IPokemon[] = pokedex.slice(0, 151);
const gen2: IPokemon[] = pokedex.slice(151, 251);
const gen3: IPokemon[] = pokedex.slice(251, 386);
const gen4: IPokemon[] = pokedex.slice(386, 494);
const gen5: IPokemon[] = pokedex.slice(494, 649);
const gen6: IPokemon[] = pokedex.slice(649, 809);
const gen7: IPokemon[] = pokedex.slice(809);
const gen0: IPokemon[] = pokedex.slice(0);

const PokedexTable: React.FC<IProps> = ({ generationTitle }) => {
  const makePokedexTable = (generation: IPokemon[]) => {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <>
            {generation.map((pokemon, index) => {
              return (
                <tr key={index}>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name.english}</td>
                  <td>
                    <img src={pokemon.image.thumbnail} alt="" style={{ height: 100 + "px", width: 100 + "px" }} />
                  </td>
                  <td>{pokemon.type.length > 1 ? `${pokemon.type[0]}/${pokemon.type[1]}` : pokemon.type[0]}</td>
                </tr>
              );
            })}
          </>
        </tbody>
      </Table>
    );
  };
  const getProperTable = (generationTitle: string | null) => {
    switch (generationTitle) {
      case "Generation 1 - Kanto Region":
        return makePokedexTable(gen1);
      case "Generation 2 - Johto Region":
        return makePokedexTable(gen2);
      case "Generation 3 - Hoenn Region":
        return makePokedexTable(gen3);
      case "Generation 4 - Sinnoh Region":
        return makePokedexTable(gen4);
      case "Generation 5 - Unova Region":
        return makePokedexTable(gen5);
      case "Generation 6 - Kalos Region":
        return makePokedexTable(gen6);
      case "Generation 7 - Alola Region":
        return makePokedexTable(gen7);
      default:
        return makePokedexTable(gen0);
    }
  };

  return (
    <>
      <h1>{generationTitle}</h1>
      {getProperTable(generationTitle)}
    </>
  );
};

export default PokedexTable;
