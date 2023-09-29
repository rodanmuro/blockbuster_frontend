import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../App'
import { obtenerPeliculasCatalogo } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';
import { Link } from 'react-router-dom';

const Catalogo = () => {

  const { user } = useContext(userContext);
  const [movies, setMovies] = useState([]);

  const cargarPeliculas = async () => {
    let data = await obtenerPeliculasCatalogo();
    setMovies(data);
  }

  useEffect(
    () => {
      cargarPeliculas();
    },
    []
  )

  return (

    <>
      <Link to="/themoviedb">Movies TMDB</Link>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center py-5'>
            Catálogo de Películas
          </h2>
        </div>
      </div>

      <div className='container'>
        <div className='row pt-3 d-flex justify-content-center'>
          {
            movies.map((movie) => (
              <CardMovie movie={movie} />
            ))
          }
        </div>
      </div>

    </>

  )
}

export default Catalogo 