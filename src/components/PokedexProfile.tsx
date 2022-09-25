import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { IPokemon } from "../interface";
import pokedex from "../data/pokedex.json";

interface IPokedexProfileProps {
  id: number;
}

const PokedexProfile: React.FC<IPokedexProfileProps> = ({ id }) => {
  const pokemon: IPokemon = pokedex[id - 1];

  const getAbilitiesName = (abilities: string[][]): string => {
    let returnedAbilities = "";
    abilities.forEach((ability) => {
      returnedAbilities = returnedAbilities + "  " + ability[0];
    });
    return returnedAbilities;
  };

  const getGenderRatio = (genderRatio: string): string => {
    const genders = genderRatio.split(":");
    return `Male: ${genders[0]}% | Female: ${genders[1]}%`;
  };

  const findPokemon = (pokemonID: number): IPokemon => {
    console.log(pokemonID + " HERE");
    return pokedex[pokemonID - 1];
  };

  return (
    <Container>
      <img src={pokemon.image.hires || pokemon.image.thumbnail} alt="" />
      <hr />
      <Container>
        <Row>
          <Col>
            {" "}
            {pokemon.id - 1 > 0 ? <img src={findPokemon(pokemon.id - 1).image.thumbnail || ""} style={{ width: "100px" }} alt="" /> : null}
            {pokemon.id - 1 > 0 ? <p>Previous</p> : null}
          </Col>
          <Col>
            {" "}
            {pokemon.id - 1 <= pokedex.length ? (
              <img src={findPokemon(pokemon.id + 1).image.thumbnail || ""} style={{ width: "100px" }} alt="" />
            ) : null}
          </Col>
        </Row>
      </Container>
      <h2>Basic Information</h2>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td>National Dex #</td>
            <td>{pokemon.id}</td>
          </tr>
          <tr>
            <td width={"300px"}>Name</td>
            <td>{pokemon.name.english}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{pokemon.species}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{pokemon.description}</td>
          </tr>
        </tbody>
      </Table>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td width={"300px"}>Type</td>
            <td>{pokemon.type.length > 1 ? `${pokemon.type[0]}/${pokemon.type[1]}` : pokemon.type[0]}</td>
          </tr>
          <tr>
            <td>Ability</td>
            <td>{(pokemon.profile.ability as string[][]).length >= 1 ? getAbilitiesName(pokemon.profile.ability as string[][]) : "NONE"}</td>
          </tr>
          <tr>
            <td>Gender Ratio</td>
            <td>{getGenderRatio(pokemon.profile.gender)}</td>
          </tr>
        </tbody>
      </Table>
      <h2>Breeding Information</h2>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td width={"300px"}>Height</td>
            <td>{pokemon.profile.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{pokemon.profile.weight}</td>
          </tr>
          <tr>
            <td>Egg Groups</td>
            <td>{pokemon.profile.egg ? pokemon.profile.egg?.join(" | ") : "None"}</td>
          </tr>
        </tbody>
      </Table>
      <h2>Stats Information</h2>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td width={"300px"}>HP</td>
            <td>{pokemon.base?.HP}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{pokemon.base?.Attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{pokemon.base?.Defense}</td>
          </tr>
          <tr>
            <td>Sp. Attack</td>
            <td>{pokemon.base?.["Sp. Attack"]}</td>
          </tr>
          <tr>
            <td>Sp. Defense</td>
            <td>{pokemon.base?.["Sp. Defense"]}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{pokemon.base?.Speed}</td>
          </tr>
        </tbody>
      </Table>
      <h2>Evolution Information</h2>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td width={"300px"}>Previous Evolution</td>
            <td>{pokemon.evolution?.prev ? findPokemon(parseInt(pokemon.evolution?.prev[0])).name.english : "None"}</td>
          </tr>
          <tr>
            <td>Next Evolution</td>
            <td>{pokemon.evolution?.next ? findPokemon(parseInt(pokemon.evolution?.next[0][0])).name.english : "None"}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PokedexProfile;
