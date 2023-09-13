import { API_ENDPOINTS } from "./apiEndpoints";
import axios from "axios";
import Cookies from "universal-cookie";

const getJwt = ()=>{
    let cookies = new Cookies();
    let jwt = cookies.get("jwt")
    return jwt;
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