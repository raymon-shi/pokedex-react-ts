import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokedexNavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container style={{ float: "left", justifyContent: "space-evenly" }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/table">Table</Link>
        </Container>
      </Navbar>
    </>
  );
};

export default PokedexNavBar;
