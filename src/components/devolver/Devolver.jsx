import React, { useContext } from 'react'
import { devolverPeliculaAlquilada, eliminarPeliculaCatalogo } from '../../utils/apiFunctions';
import { userContext } from '../../App';

const Devolver = ({movie}) => {
    const { user } = useContext(userContext);

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