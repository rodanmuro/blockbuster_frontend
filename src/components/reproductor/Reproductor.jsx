import React, { useContext } from "react";
import './Reproductor.css';
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';

import InfoBanner from '../infobanner/InfoBanner';
import { API_ENDPOINTS } from "../../utils/apiEndpoints";

import { moviePlayContext } from "../../App";
import { obtenerIDVideo } from "../../utils/apiFunctions";

const Reproductor = () => {

    const [playing, setPlaying] = useState(false);
    const [trailer, setTrailer] = useState(false);

    const { moviePlay } = useContext(moviePlayContext);

    const consultarVideoKey = async () => {
        let video = await obtenerIDVideo(moviePlay.id);
        setTrailer(video);
    }

    useEffect(() => {
        
        if (moviePlay.id) {
            console.log(moviePlay.id);
            consultarVideoKey();
        }
    }, [moviePlay]);

    const updatePlaying = () => setPlaying(true);

    return (
        <>
            <main className="seccion-reproductor">
                {moviePlay ? (
                    <div className={`viewtrailer ${!trailer ? 'd-none' : 'd-flex'} `}>
                        <img src={`${API_ENDPOINTS.urlImage}${moviePlay.backdrop_path}`} className={!trailer ? 'd-none' : 'd-block'} />
                        {playing ? (
                            <>
                                <YouTube
                                    videoId={trailer}
                                    className="reproductor"
                                    containerClassName={"youtube-container amru"}
                                    opts={{
                                        width: "100%",
                                        height: "100%",
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 0,
                                            cc_load_policy: 0,
                                            fs: 0,
                                            iv_load_policy: 0,
                                            modestbranding: 0,
                                            rel: 0,
                                            showinfo: 0,
                                        },
                                    }}
                                />
                                <button onClick={() => setPlaying(false)} className="boton btn-cerrar">
                                    Close
                                </button>
                            </>
                        ) : (<InfoBanner movie={moviePlay} HandlerUpdatePlaying={(state) => updatePlaying} />)}
                    </div>
                ) : null}
            </main>
        </>
    );
};

export default Reproductor;
