const API_BASE_URL = "http://localhost:8080"

const API_ENDPOINTS = {
    login: `${API_BASE_URL}/login`,
    registro: `${API_BASE_URL}/usuario`,
    peliculacatalogo: `${API_BASE_URL}/peliculacatalogo`,
    urlImage:"https://image.tmdb.org/t/p/original",
    themoviedb:`${API_BASE_URL}/themoviedb`,
    mispeliculas:`${API_BASE_URL}/peliculaalquilada`,
    guardarPeliculaCatalogo: `${API_BASE_URL}/peliculacatalogo`
}

export {API_ENDPOINTS}