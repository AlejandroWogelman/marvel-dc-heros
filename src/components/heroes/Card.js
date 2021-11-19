import { Link } from "react-router-dom";
import "./heroes.css";

export const Card = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card" key={id}>
      <div className="card-img">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          style={{ height: "100%" }}
        />
      </div>
      <div className="card-content">
        <h5> {superhero}</h5>
        <p>Alter: {alter_ego}</p>

        {characters !== alter_ego && <small>{characters}</small>}

        <p>{first_appearance}</p>

        <Link
          to={`./hero/
        ${id}`}
        >
          Más...
        </Link>
      </div>
    </div>
  );
};
