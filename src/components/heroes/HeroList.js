import React from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { Card } from "./Card";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-container animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <Card {...heroe} key={heroe.id} />
      ))}
    </div>
  );
};
