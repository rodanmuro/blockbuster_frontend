import React from 'react'

const CardMovie = ({movie}) => {

let id = movie.idPelicula===undefined?movie.id:movie.idPelicula;

  return (
    <div 
    key={id}
    >

    </div>
  )
}

export default CardMovie