import React, { useState } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";

import { Card } from "../heroes/Card";
import { getHeroByName } from "../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  //Extrae los datos del Query 'q' parse / busqueda
  const { q = "" } = queryString.parse(location.search);

  const [state, setstate] = useState(q);
  const heroesSearch = getHeroByName(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    //Le agrega a la url o SEARCH luego se extrae de location
    history.push(`?q=${value}`);
    setstate(value);
    e.target.reset();
  };

  return (
    <div className="row">
      <div className="col-4">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="buscar" className="form-control" />
          <button className="btn btn-outline-dark" type="submit">
            search
          </button>
        </form>
      </div>
      <div className="col-8">
        {/* Si el query es un string vacio es que no buscó nada */}
        {q === "" && (
          <div className="alert alert-info">
            <p>Resultados de busqueda</p>
          </div>
        )}

        {/* Si el query no es un string vacio y heroesSearch no dio resultado significa que buscó y no encontró */}
        {q !== "" && heroesSearch.length === 0 && (
          <div className="alert alert-danger">
            <p>{`La busqueda de "${q}" no ha arrojado coincidencias`}</p>
          </div>
        )}
        {state.length > 0 &&
          heroesSearch.map((heroe) => <Card {...heroe} key={heroe.id} />)}
      </div>
    </div>
  );
};
