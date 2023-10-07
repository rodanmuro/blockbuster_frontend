import React, { useContext } from 'react'
import { API_ENDPOINTS } from '../../utils/apiEndpoints';
import "./CardMovie.css"
import Alquilar from '../alquilar/Alquilar';
import Devolver from '../devolver/Devolver';

import iconReproductor from '../assets/icon-reproductor.png'

import { moviePlayContext } from '../../App';

const CardMovie = ({movie, tipo}) => {

let id = movie.idPelicula===undefined?movie.idAlquilada:movie.idPelicula;
let tipoBoton = "";

const{setMoviePlay} = useContext(moviePlayContext);

const actualizarMovie = ()=>{
  console.log(movie);
  setMoviePlay(movie);
}


if(tipo==='agregar'){
  tipoBoton = <Alquilar movie={movie}/>
}
if(tipo==='devolver'){
  tipoBoton = <Devolver movie={movie}/>
}



  return (
    <div 
    key={id}
    className='col-10 col-xs-9 col-sm-9 cl-md-6 col-lg-4 d-flex justify-content-center mb-5 position-relative seccion-cardmovie' 
    >

      <div className='border'>
        <div>
          {tipo == 'devolver' ? 
          <img src={ iconReproductor } className='icon-play' onClick={actualizarMovie} /> : ''}
          <img 
          src={`${API_ENDPOINTS.urlImage + movie.poster_path}` } 
          alt={movie.title} 
          className='img-movie'
          />
        </div>

        {tipoBoton}

    <div className='px-3 pt-2'>
      <h2 className='pt-3' >
        {
          `${movie.title} (${movie.release_date}) `
        }
      </h2>
      <h5>
        Idioma: {movie.original_language}
      </h5>

      <h5>
        Calificación: {movie.vote_average}
      </h5>

      <p className='text-justify' style={{fontSize:14}}>
        <b style={{fontSize:18}}>Descripción</b>
        {movie.overview.slice(0,250)}...
      </p>

    </div>

      </div>

    </div>
  )
}

export default CardMovie