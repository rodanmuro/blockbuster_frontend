import React, { useContext } from "react";
import "./Buscar.css";

import { useState, useEffect } from "react";
import { obtenerPeliculasTMDB } from "../../utils/apiFunctions";

import { moviesTMDBcontext } from "../../App";

const Buscar = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const { moviesTMDB, setMoviesTMDB } = useContext(moviesTMDBcontext);

  useEffect(() => {

  }, []);

  const buscar = async (e) => {
    setTerminoBusqueda(e.target.value);
    let movies = await obtenerPeliculasTMDB(terminoBusqueda);
    setMoviesTMDB(movies);
  };

  return (
    <input
      type="text"
      name=""
      placeholder="Buscar"
      id=""

      onChange={
        (e) => {
          buscar(e);
        }
      }

    />
  );
};

export default Buscar;
