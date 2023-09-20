import React, { useContext, useState } from 'react'
import { getJwt, login } from '../utils/apiFunctions';
import { useNavigate } from 'react-router';

import { loggedContext, userContext } from '../App';
import jwtDecode from 'jwt-decode';

const Login = () => {

  const navigate = useNavigate();
  const {logged, setLogged} = useContext(loggedContext);
  const {user, setUser} = useContext(userContext);

  const[username, setUsername] =useState('');
  const[password, setPassword] =useState('');

  const handleChangeUsername= (event)=>{
    setUsername(event.target.value)
  }

  const handleChangePassword= (event)=>{
    setPassword(event.target.value)
  }

  const loguear = async ()=>{
    let mensaje = await login(username, password);
    if(mensaje=="success"){
      setLogged(true);

      if(getJwt()){
        const data = jwtDecode(getJwt());
  
        setUser(
          {
            username:data.username,
            role:data.role
          }
        );
      }

      navigate("/");
    }else{
      console.log(mensaje);
    }
  }

  return (
    <div>
      <div>
        <label>Username</label>
        <input type="text" onChange={handleChangeUsername} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" onChange={handleChangePassword}/>
      </div>

      <div>
        <button onClick={loguear}>Ingresar</button>
      </div>

    </div>
  )
}

export default Login