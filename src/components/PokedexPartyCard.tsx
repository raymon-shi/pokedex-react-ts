import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { IPokemonPartyMember } from "../interface";
import { useNavigate, NavigateFunction } from "react-router";
import pokedex from "../data/pokedex.json";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
  id: number;
  name: string;
  sprite: string;
}

const PokedexPartyCard: React.FC<IProps> = ({ id, name, sprite, party, setParty }) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={sprite} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Container style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Button
              style={{ width: "8rem" }}
              variant="success"
              disabled={party.filter((member) => member.id === id).length >= 1 || party.length === 6}
              onClick={() => {
                setParty([...party, { id, name, sprite: pokedex[id - 1].image.sprite }]);
              }}>
              Add
            </Button>

            <Button
              style={{ width: "8rem" }}
              variant="danger"
              disabled={party.length === 0 || party.filter((member) => member.id === id).length === 0}
              onClick={() => {
                setParty(party.filter((member) => member.id !== id));
              }}>
              Remove
            </Button>
            <Button style={{ width: "8rem" }} onClick={() => navigate(`/profile/${id}/${name}`)}>
              View
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokedexPartyCard;
