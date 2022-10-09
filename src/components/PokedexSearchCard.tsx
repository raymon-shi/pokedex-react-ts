import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, NavigateFunction } from "react-router-dom";
import pokedex from "../data/pokedex.json";
import { IPokemonPartyMember } from "../interface";

interface IPokedexSearchCard {
  id: number;
  name: string;
  type: string[];
  species: string;
  description: string;
  thumbnail: string;
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexSearchCard: React.FC<IPokedexSearchCard> = ({
  id,
  name,
  type,
  species,
  description,
  thumbnail,
  party,
  setParty,
}): React.ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <Card style={{ width: "35rem" }} className="mb-5">
          <Container style={{ display: "flex", flexDirection: "row" }}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{`#${id} - ${name}`}</Card.Title>
              <Card.Text>{species}</Card.Text>
              <Card.Text>{type}</Card.Text>
              <hr />
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Container>
          <hr />
          <Container style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Button
              style={{ width: "8rem" }}
              variant="success"
              disabled={party.filter((member: IPokemonPartyMember): boolean => member.id === id).length >= 1 || party.length === 6}
              onClick={(): void => {
                setParty([...party, { id, name, sprite: pokedex[id - 1].image.sprite }]);
              }}>
              Add
            </Button>
            <Button
              style={{ width: "8rem" }}
              variant="danger"
              disabled={party.length === 0 || party.filter((member) => member.id === id).length === 0}
              onClick={(): void => {
                setParty(party.filter((member: IPokemonPartyMember): boolean => member.id !== id));
              }}>
              Remove
            </Button>
            <Button style={{ width: "8rem" }} onClick={(): void => navigate(`/profile/${id}/${name}`)}>
              View
            </Button>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default PokedexSearchCard;
