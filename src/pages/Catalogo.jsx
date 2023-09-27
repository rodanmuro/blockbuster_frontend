import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../App'
import { obtenerPeliculasCatalogo } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';

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
          <CardMovie movie={movie}/>
        ))
      }
    </div>
  )
}

export default Catalogo 