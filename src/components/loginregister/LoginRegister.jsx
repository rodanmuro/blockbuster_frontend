import React from 'react'
import './LoginRegister.css'
import { getJwt, login, registrar } from '../../utils/apiFunctions';
import { useNavigate } from 'react-router';

import { useContext, useState } from 'react';

import { loggedContext, userContext } from '../../App';
import jwtDecode from 'jwt-decode';

const LoginRegister = () => {

    const navigate = useNavigate();
    const { logged, setLogged } = useContext(loggedContext);
    const { user, setUser } = useContext(userContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registro, setRegistro] = useState(false);

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const loguear = async () => {
        let mensaje = await login(username, password);
        if (mensaje == "success") {
            setLogged(true);

            if (getJwt()) {
                const data = jwtDecode(getJwt());

                setUser(
                    {
                        username: data.username,
                        role: data.role
                    }
                );
            }

            navigate("/");
        } else {
            console.log(mensaje);
        }
    }

    const registrando = async () => {
        await registrar(username, password);
    }

    return (
        <div className='mt-4 cont-formulario'>
            <h2>{registro ? 'Registrarse' : 'Inicia Sesión'}</h2>

            <div>
                <div className='text-center'>Inicia sesión</div>
                <div className='pt-5 mb-3'>

                    <input className='form-control' type="text" onChange={handleChangeUsername} />
                </div>

                <div className='pt-5 mb-3'>

                    <input className='form-control' type="password" onChange={handleChangePassword} />
                </div>

                <div>
                    {registro ? (
                        <button className='btn-login' onClick={registrando}>Registrarse</button>
                    ) : (
                        <button className='btn-login' onClick={loguear}>Ingresar</button>
                    )
                    }
                </div>
            </div>
            <div>
                <button className='btn-opcion mt-3' onClick={() => setRegistro(!registro)}>{registro ? 'Ya tienes una cuenta, inicia sesión' : 'No tienes una cuenta, regístrate'}</button>
            </div>
        </div>
    )
}

export default LoginRegister