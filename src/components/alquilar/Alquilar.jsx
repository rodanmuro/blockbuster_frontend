import React, { useContext } from 'react'

import { userContext } from '../../App'
import { guardarPeliculaCatalogo } from '../../utils/apiFunctions';


const Alquilar = ({movie}) => {
    const { user } = useContext(userContext);

    return (
        <div>
            <button
            className='btn-success position-absolute end-0 top-0 m-4'
            onClick={
                ()=>{
                    user.role==='ADMIN'?guardarPeliculaCatalogo(movie):''
                }
            }
            >
                {user.role==='ADMIN'?'Agregar al Catálogo':'Alquilar'}
            </button>
        </div>
    )
}

export default Alquilar