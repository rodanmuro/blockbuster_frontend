import React, { useContext, useState } from 'react'
import { login } from '../utils/apiFunctions';
import { useNavigate } from 'react-router';

import { loggedContext } from '../App';

const Login = () => {

  const navigate = useNavigate();
  const {logged, setLogged} = useContext(loggedContext);

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
      navigate("/");
    }else{
      console.log(mensaje);
    }
  }

  return (
    <div>
      <LoginRegister/>
    </div>
  )
}

export default Login