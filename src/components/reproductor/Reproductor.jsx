import React, { useContext, useEffect, useState } from 'react'
import "./Reproductor.css"
import { moviePlayContext } from '../../App';
import { obtenerIdVideo } from '../../utils/apiFunctions';



const Reproductor = () => {

    const[playing, setPlaying]=useState(false);
    const[trailer, setTrailer]=useState(false);

    const{moviePlay} = useContext(moviePlayContext);

    const consultarVideoKey = async()=>{
        let video = await obtenerIdVideo(moviePlay.id);
        setTrailer(video);
    }

    useEffect(()=>{

        if(moviePlay.id){
            consultarVideoKey();
        }

    }, [moviePlay])

    const updatePLaying = ()=>setPlaying(true);

    return (
        <div>Reproductor</div>
    )
}

export default Reproductor