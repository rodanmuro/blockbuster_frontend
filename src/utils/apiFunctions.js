import { API_ENDPOINTS } from "./apiEndpoints";
import axios from "axios";
import Cookies from "universal-cookie";

const getJwt = ()=>{
    let cookies = new Cookies();
    let jwt = cookies.get("jwt")
    return jwt;
}

const setJwt = (jwt)=>{
    let cookies = new Cookies();
    cookies.set("jwt",jwt);
}

const isLogged = async ()=>{
    
    let jwt = getJwt() ? getJwt():"jwt";

    let logueado = false;

    await axios.get(API_ENDPOINTS.peliculacatalogo,{
        headers:{
            'Authorization':`Bearer ${jwt}`
        }
    })
    .then(
        (res)=>{
            if(res.data.error){
                logueado=false;
            }else{
                logueado=true;
            }
        }
    )

    return logueado;
}

const login = async (username, password)=>{
    let mensaje='';

    await axios.post(API_ENDPOINTS.login,{
        'username':username,
        'password':password
    })
    .then(
        (res)=>{
            if(res.data.error){
                mensaje=res.data.error;
            }
            if(res.data.jwt){
                setJwt(res.data.jwt);
                mensaje="success";
            }
        }
    )

    return mensaje;
}

export {isLogged, login}