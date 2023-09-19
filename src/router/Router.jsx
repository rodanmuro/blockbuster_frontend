import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { isLogged } from "../utils/apiFunctions";

import Catalogo from "../pages/Catalogo";
import Login from "../pages/Login";

import { loggedContext } from '../App';

const Router = () => {

  const {logged, setLogged} = useContext(loggedContext);

  const iniciar = async () => {
    const valor = await isLogged();
    setLogged(valor);
  }

  useEffect(
    () => {
      iniciar();
    },
    []
  );

  return (
    <Routes>
      <Route path="/" element={<Catalogo />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router