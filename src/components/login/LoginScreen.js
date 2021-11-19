import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  //Busca la ruta a la que se intentó ingresar o ultima gaurdada en local

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastItem = localStorage.getItem("lastPath") || "/";

    dispatch({ type: types.login, payload: { name: "alejandro" } });

    history.replace(lastItem);
  };

  return (
    <>
      <h2>Login</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
