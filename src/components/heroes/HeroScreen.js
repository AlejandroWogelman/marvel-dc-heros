import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  //Extrae los parametros enviados en CARD
  const { heroeId } = useParams();

  //const hero = getHeroById(heroeId.trim());
  const hero = useMemo(() => getHeroById(heroeId.trim()), [heroeId]);

  //Si el heroe no se encuentra, se reedirige al usuario
  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    //Retrocede
    if (history.length <= 2) {
      history.push("/");
      //validacion por si se ingresa a la direccion especifica y no hay historial.
    } else {
      history.goBack();
    }
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  console.log(id);
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          style={{ height: "70vh" }}
        />
      </div>
      <div className="col-6">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          {" "}
          Return
        </button>
      </div>
    </div>
  );
};
