import React from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import { IPokemon, IPokemonPartyMember } from "../interface";
import pokedex from "../data/pokedex.json";
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import PokedexNavBar from "./PokedexNavBar";
import PokedexParty from "./PokedexParty";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexProfile: React.FC<IProps> = ({ party, setParty }) => {
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const pokemon: IPokemon = pokedex[parseInt(id as string) - 1];

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
    return pokedex[pokemonID - 1];
  };

  const numID: number = parseInt(id as string);

  return (
    <>
      <PokedexNavBar />
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={3}>
            <img style={{ marginLeft: "auto", marginRight: "auto" }} src={pokemon.image.hires || pokemon.image.thumbnail} alt="" />
          </Col>
        </Row>
        <Container style={{ textAlign: "center" }}>
          <PokedexParty party={party} setParty={setParty} />
        </Container>
        <Container style={{ textAlign: "center" }}>
          <Button
            style={{ width: "8rem" }}
            variant="success"
            disabled={party.filter((member) => member.id === numID).length >= 1 || party.length === 6}
            onClick={() => {
              setParty([...party, { id: numID, name: findPokemon(numID).name.english, sprite: pokedex[numID - 1].image.sprite }]);
            }}>
            Add
          </Button>
          <Button
            style={{ width: "8rem" }}
            variant="danger"
            disabled={party.length === 0 || party.filter((member) => member.id === numID).length === 0}
            onClick={() => {
              setParty(party.filter((member) => member.id !== numID));
            }}>
            Remove
          </Button>
        </Container>
        <hr />
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            <Col>
              {" "}
              {pokemon.id - 1 > 0 ? (
                <img
                  onClick={() => navigate(`/profile/${pokemon.id - 1}/${findPokemon(pokemon.id - 1).name.english}`, { replace: true })}
                  src={findPokemon(pokemon.id - 1).image.thumbnail || ""}
                  style={{ width: "100px" }}
                  alt=""
                />
              ) : null}
              {pokemon.id - 1 > 0 ? <p>Previous</p> : null}
            </Col>
            <Col>
              {" "}
              {pokemon.id - 1 <= pokedex.length ? (
                <img
                  onClick={() => navigate(`/profile/${pokemon.id + 1}/${findPokemon(pokemon.id + 1).name.english}`, { replace: true })}
                  src={findPokemon(pokemon.id + 1).image.thumbnail || ""}
                  style={{ width: "100px" }}
                  alt=""
                />
              ) : null}
              {pokemon.id - 1 <= pokedex.length ? <p>Next</p> : null}
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
    </>
  );
};

export default PokedexProfile;
