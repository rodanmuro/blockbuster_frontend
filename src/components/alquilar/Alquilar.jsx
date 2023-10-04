import React, { useContext } from 'react'

import { userContext } from "../../App"
import { agregarPeliculaAlquilada, guardarPeliculaCatalogo } from '../../utils/apiFunctions';

import { alertContext } from '../../App';

const Alquilar = ({movie}) => {

    const { user } = useContext(userContext);
    const {setSwalProps} = useContext(alertContext);

    const guardarCatalogo = async ()=>{
        
        let mensaje = await guardarPeliculaCatalogo(movie);
        if(mensaje!=""){

            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sido agregada al catálogo"
            })

        }
    }

    const agregarAlquilada = async ()=>{
        let mensaje = await agregarPeliculaAlquilada(movie);
        if(mensaje!="La película que intentas alquilar ya está en tu base de datos de películas alquiladas"){

            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sido alquilada"
            })

        }else{
            console.log(mensaje);
            setSwalProps({
                show:true,
                title:"Error",
                text:"La película "+movie.title+" ya la tienes alquilada"
            })
        }
    }

    return (
        <div>
            <button
                className='btn-success position-absolute end-0 top-0 m-4'
                onClick={
                    ()=>(
                        user.role==='ADMIN'?guardarCatalogo():agregarAlquilada()
                    )
                }
            >
                {user.role==='ADMIN'?'Agregar Película al Catálogo':'Alquilar'}

            </button>
        </div>
    )
}

export default Alquilar