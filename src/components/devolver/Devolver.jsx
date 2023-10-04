import React, { useContext } from 'react'

import { userContext } from "../../App"
import { agregarPeliculaAlquilada, devolverPeliculaAlquilada, eliminarPeliculaCatalogo, guardarPeliculaCatalogo } from '../../utils/apiFunctions';

const Devolver = ({movie}) => {

    const { user } = useContext(userContext);

    const sololog = ()=>{
        console.log("algo");
    }

    return (
        <div>
            <button
                className='btn-danger position-absolute end-0 top-0 m-4'
                onClick={
                    ()=>(
                        user.role==='ADMIN'?eliminarPeliculaCatalogo(movie.idPelicula):devolverPeliculaAlquilada(movie.idAlquilada)
                    )
                }
            >
                {user.role==='ADMIN'?'Eliminar del Catálogo':'Devolver'}

            </button>
        </div>
    )
}

export default Devolver