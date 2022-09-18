import React from "react";
import { Table } from "react-bootstrap";
import pokedex from "../data/pokedex.json";
import pokedexTest from "../data/pokedexTest.json";

interface IProps {
  generationTitle: string | null;
}

interface IName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface IBaseStats {
  HP?: number;
  Attack?: number;
  Defense?: number;
  "Sp. Attack"?: number;
  "Sp. Defense"?: number;
  Speed?: number;
}

interface IEvolution {
  prev?: string[] | undefined;
  next?: string[][] | undefined;
}

interface IProfile {
  height: string;
  weight: string;
  egg?: string[] | undefined;
  ability?: string[][] | undefined;
  gender: string;
}

interface IImage {
  sprite: string;
  thumbnail: string;
  hires?: string;
}

interface IPokemon {
  id: number;
  name: IName;
  type: string[];
  base?: IBaseStats;
  species: string;
  description: string;
  evolution?: IEvolution;
  profile: IProfile;
  image: IImage;
}

const PokedexTable: React.FC<IProps> = ({ generationTitle }) => {
  const gen1: IPokemon[] = pokedex.slice(0, 151);
  // const gen2: Object[] = pokedex.slice(151, 252);
  // const gen3: Object[] = pokedex.slice(251, 388);
  // const gen4: Object[] = pokedex.slice(387, 496);
  // const gen5: Object[] = pokedex.slice(495, 651);
  // const gen6: Object[] = pokedex.slice(650, 811);
  // const gen7: Object[] = pokedex.slice(810, pokedex.length + 1);

  const makePokedexTable = (generationRange: number[]) => {
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
            {gen1.slice(0).map((pokemon) => {
              return (
                <tr>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name.english}</td>
                  <td>
                    <img src={pokemon.image.thumbnail} alt="" />
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
      case "Generation 1":
        return makePokedexTable([0, 151]);
      case "Generation 2":
        return 2;
      case "Generation 3":
        return 3;
      case "Generation 4":
        return 4;
      case "Generation 5":
        return 5;
      case "Generation 6":
        return 6;
      case "Generation 7":
        return 7;
      default:
        return 0;
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
