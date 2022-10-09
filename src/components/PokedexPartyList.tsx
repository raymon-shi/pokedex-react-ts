import React from "react";
import { IPokemonPartyMember } from "../interface";
import PokedexPartyCard from "./PokedexPartyCard";

interface IProps {
  party: IPokemonPartyMember[];
  setParty: React.Dispatch<React.SetStateAction<IPokemonPartyMember[]>>;
}

const PokedexPartyList: React.FC<IProps> = ({ party, setParty }) => {
  return (
    <>
      {party.map((member) => (
        <PokedexPartyCard id={member.id} name={member.name} sprite={member.sprite} party={party} setParty={setParty} />
      ))}
    </>
  );
};

export default PokedexPartyList;
