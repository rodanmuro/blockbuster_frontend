import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../App'
import { obtenerPeliculasCatalogo } from '../utils/apiFunctions';

const Catalogo = () => {

const {user} = useContext(userContext);
const [movies, setMovies] = useState([]);

const cargarPeliculas = async()=>{
   let data = await obtenerPeliculasCatalogo();
   setMovies(data);
}

useEffect(
  ()=>{
    cargarPeliculas();
  },
  []
)

  return (
    <div>
      {
        movies.map((movie)=>(
          <div style={{color:"white"}}>
            {movie.title}
          </div>
        ))
      }
    </div>
  )
}

export default Catalogo 