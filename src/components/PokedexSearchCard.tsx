import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface IPokedexSearchCard {
  id: number;
  name: string;
  type: string[];
  species: string;
  description: string;
  thumbnail: string;
}

const PokedexSearchCard: React.FC<IPokedexSearchCard> = ({ id, name, type, species, description, thumbnail }) => {
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
            <Button style={{ width: "8rem" }} variant="success">
              Add
            </Button>
            <Button style={{ width: "8rem" }} variant="danger">
              Remove
            </Button>
            <Button style={{ width: "8rem" }} onClick={() => navigate(`/profile/${id}/${name}`)}>
              View
            </Button>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default PokedexSearchCard;
