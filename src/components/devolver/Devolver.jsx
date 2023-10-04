import React, { useContext } from 'react'

import { userContext } from "../../App"
import { alertContext } from '../../App';
import { moviesCatalogoContext } from '../../App';
import { agregarPeliculaAlquilada, devolverPeliculaAlquilada, eliminarPeliculaCatalogo, guardarPeliculaCatalogo, obtenerPeliculasCatalogo } from '../../utils/apiFunctions';
import { Navigate } from 'react-router-dom';

const Devolver = ({movie}) => {

    const { user } = useContext(userContext);
    const {setSwalProps} = useContext(alertContext);
    const {setMoviesCatalogo} = useContext(moviesCatalogoContext);

    const eliminarCatalogo = async ()=>{
        
        let mensaje = await eliminarPeliculaCatalogo(movie.idPelicula);
        if(mensaje==204){

            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sido quitada del Catálogo"
            })

            let data = await obtenerPeliculasCatalogo();
            setMoviesCatalogo(data);
        }
    }

    const devolverAlquilada = async ()=>{
        let mensaje = await devolverPeliculaAlquilada(movie.idAlquilada);
        if(mensaje==204){

            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sido devuelta"
            })

            return <Navigate to="/mispeliculas"/>
        }
    }

    return (
        <div>
            <button
                className='btn-danger position-absolute end-0 top-0 m-4'
                onClick={
                    ()=>(
                        user.role==='ADMIN'?eliminarCatalogo():devolverAlquilada()
                    )
                }
            >
                {user.role==='ADMIN'?'Eliminar del Catálogo':'Devolver'}

            </button>
        </div>
    )
}

export default Devolver