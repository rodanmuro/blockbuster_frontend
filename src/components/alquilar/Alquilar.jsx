import React, { useContext } from "react";
import { guardarPeliculaCatalogo } from "../../utils/apiFunctions";

import { userContext } from "../../App";

const Alquilar = ({ movie }) => {

    const { user } = useContext(userContext);

    const sololog = ()=>{
        console.log("solo log");
    }

    return (
        <button
            className="btn-success position-absolute end-0 top-0 m-4"
            onClick={() => (
                user.role === 'ADMIN' ? guardarPeliculaCatalogo(movie) : sololog()
            )}
        >
            {user.role === 'ADMIN' ? 'Agregar al Catálogo' : 'Alquilar'}
        </button>
    );
};

export default Alquilar;
