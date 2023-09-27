import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../App'
import { obtenerPeliculasCatalogo } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';

const Catalogo = () => {

  const { user } = useContext(userContext);

  const [movies, setMovies] = useState([]);

  const cargarPeliculas = async () => {
    let movies_ = await obtenerPeliculasCatalogo();
    if (!movies_.error) {
      setMovies(movies_)
    }
  }

  useEffect(
    () => {
      cargarPeliculas();
    }
    ,
    []
  );

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center py-5'>
            Catálogo de Películas
          </h2>
        </div>
      </div>

      <div className='container'>
        <div className="row pt-3 d-flex justify-content-center">
          {movies.map(
            (movie) => (
              <CardMovie movie={movie} />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Catalogo 