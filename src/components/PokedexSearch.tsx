import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const PokedexSearch = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  console.log(pokemonName);
  return (
    <Container>
      <Form style={{ textAlign: "left" }}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Enter the Pokemon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Pokemon you want to search!"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default PokedexSearch;
