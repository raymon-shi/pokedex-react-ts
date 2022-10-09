import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import PokedexPartyList from "./PokedexPartyList";
import { IPokemonPartyMember } from "../interface";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexParty: React.FC<IProps> = ({ party, setParty }) => {
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
          <PokedexPartyList party={party} setParty={setParty} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PokedexParty;
