import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { isLogged } from "../utils/apiFunctions";

import Catalogo from "../pages/Catalogo";
import Login from "../pages/Login";

import { loggedContext } from '../App';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {

  const { logged, setLogged } = useContext(loggedContext);

  const navigate = useNavigate();

  const iniciar = async () => {
    const valor = await isLogged();
    setLogged(valor);
    navigate("/")
  }

  useEffect(
    () => {
      iniciar();
    },
    []
  );

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute logged={logged}>
          <Catalogo />
        </ProtectedRoute>
      } />

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router