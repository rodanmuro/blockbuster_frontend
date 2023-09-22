import React, { useContext, useState } from 'react'
import { getJwt, login, registrar } from '../../utils/apiFunctions';
import { useNavigate } from 'react-router';

import { loggedContext, userContext } from '../../App';
import jwtDecode from 'jwt-decode';

const LoginRegister = () => {

    const navigate = useNavigate();
    const { logged, setLogged } = useContext(loggedContext);
    const { user, setUser } = useContext(userContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registro, setRegistro] = useState(false)

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
        <div>
            <h2> {registro ? 'Regístrate, si aún no tienes cuenta' : 'Inicia Sesión'} </h2>
            <div>
                <label>Username</label>
                <input type="text" onChange={handleChangeUsername} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={handleChangePassword} />
            </div>

            <div>
                {
                    registro ? (
                        <button onClick={registrando}>Registrar</button>
                    ) : (
                        <button onClick={loguear}>Ingresar</button>
                    )
                }
            </div>

            <div>
                <button onClick={()=>setRegistro(!registro)} >
                    {registro ? 'Ya tienes una cuenta?, Inicia sesión':'No tienes una cuenta, regístrate'}
                </button>
            </div>

        </div>
    )
}

export default LoginRegister