import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import PokedexPartyList from "./PokedexPartyList";

const PokedexParty = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View your party
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pokemon Party</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <PokedexPartyList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PokedexParty;
