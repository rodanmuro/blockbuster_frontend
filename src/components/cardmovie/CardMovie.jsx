import React from 'react'
import { API_ENDPOINTS } from '../../utils/apiEndpoints';
import "./CardMovie.css"

const CardMovie = ({ movie }) => {

  let id = movie.idPelicula === undefined ? movie.id : movie.idPelicula;

  return (
    <div
      key={id}

      className='col-10 col-xs-9 col-sm-9 col-md-6 col-lg-4 d-flex justify-content-center mb-5 position-relative seccion-cardmovie'
    >
      <div className='border'>

        <div>
          <img src={`${API_ENDPOINTS.urlImage}` + movie.poster_path} alt={movie.title} className='img-movie' />
        </div>

        <div className='px-3 pt-2'>
          <h2 className='pt-3'>
            {`${movie.title}(${movie.release})`}
          </h2>
          <h5>Idioma {movie.original_language}</h5>
          <h5>Calificación {`${movie.vote_average}/10`}</h5>
          <p className='text-justify' style={{fontSize:14}}>
            {" "}
            <b style={{fontSize:18}} >Descripción:</b>
            {movie.overview}
          </p>
        </div>

      </div>

    </div>
  )
}

export default CardMovie