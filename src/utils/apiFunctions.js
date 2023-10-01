import { API_ENDPOINTS } from "./apiEndpoints";
import axios from "axios";
import Cookies from "universal-cookie";

const getJwt = () => {
    let cookies = new Cookies();
    let jwt = cookies.get("jwt")
    return jwt;
}

const setJwt = (jwt) => {
    let cookies = new Cookies();
    cookies.set("jwt", jwt);
}

const isLogged = async () => {

    let jwt = getJwt() ? getJwt() : "jwt";

    let logueado = false;

    await axios.get(API_ENDPOINTS.peliculacatalogo, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
        .then(
            (res) => {
                if (res.data.error) {
                    logueado = false;
                } else {
                    logueado = true;
                }
            }
        )

    return logueado;
}

const login = async (username, password) => {
    let mensaje = '';

    await axios.post(API_ENDPOINTS.login, {
        'username': username,
        'password': password
    })
        .then(
            (res) => {
                if (res.data.error) {
                    mensaje = res.data.error;
                }
                if (res.data.jwt) {
                    setJwt(res.data.jwt);
                    mensaje = "success";
                }
            }
        )

    return mensaje;
}

const registrar = async (username, password) => {

    let mensaje = "";

    await axios.post(API_ENDPOINTS.registro, {
        email: username,
        password: password
    }).then(
        (res) => {
            if (res.data.mensaje == "registrado") {
                mensaje = "Usuario " + username + " registrado correctamente";
            }
            if (res.data.mensaje == "duplicado") {
                mensaje = "Usuario " + username + " ya existe";
            }
            if (res.data.mensaje == "longitud de contraseña menor a 8") {
                mensaje = "La contraseña es demasiado corta, debe tener más de 8 caracteres";
            }
            console.log(res.data);
        }
    )

    return mensaje;

}

const obtenerPeliculasCatalogo = async () => {
    let jwt = getJwt();

    let mensaje = [];

    await axios.get(API_ENDPOINTS.peliculacatalogo, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(
        (res) => {
            if (res.data) {
                mensaje = res.data;
            }
        }
    )
    return mensaje;
}

const obtenerPeliculasTMDB = async (query) => {

    let endpoint = "";
    if (query) {
        endpoint = API_ENDPOINTS.themoviedb + "?query=" + query;
    } else {
        endpoint = API_ENDPOINTS.themoviedb;
    }

    let jwt = getJwt();

    let mensaje = [];

    await axios.get(endpoint, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(
        (res) => {
            if (res.data) {
                mensaje = res.data.results;
            }
        }
    )
    return mensaje;

}

const obtenerPeliculasAlquiladas = async () => {

    let jwt = getJwt();

    let mensaje = [];

    await axios.get(API_ENDPOINTS.mispeliculas, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(
        (res) => {
            if (res.data) {
                mensaje = res.data.map(
                    (movie) => {
                        return {
                            idAlquilada: movie.idAlquilada,
                            poster_path: movie.peliculaCatalogo.poster_path,
                            title: movie.peliculaCatalogo.title,
                            release_data: movie.peliculaCatalogo.release_data,
                            original_language: movie.peliculaCatalogo.original_language,
                            vote_average: movie.peliculaCatalogo.vote_average,
                            overview: movie.peliculaCatalogo.overview,

                        }
                    }
                )
            }
        }
    )
    return mensaje;

}

const guardarPeliculaCatalogo = async (movie) => {
    let jwt = getJwt();

    let mensaje = "";

    await axios.post(API_ENDPOINTS.peliculacatalogo,
        movie, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }
    ).then((res)=>{
        mensaje = res.data.idAlquilada;
    });

    return mensaje;

}


export {
    isLogged,
    login,
    getJwt,
    registrar,
    obtenerPeliculasCatalogo,
    obtenerPeliculasTMDB,
    obtenerPeliculasAlquiladas,
    guardarPeliculaCatalogo
}