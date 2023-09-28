import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { getJwt, isLogged } from "../utils/apiFunctions";

import Catalogo from "../pages/Catalogo";
import Login from "../pages/Login";

import { loggedContext, userContext } from '../App';
import ProtectedRoute from './ProtectedRoute';
import jwtDecode from 'jwt-decode';
import MoviesTMDB from '../pages/MoviesTMDB';
import MisPeliculas from '../pages/MisPeliculas';

const Router = () => {

  const { logged, setLogged } = useContext(loggedContext);
  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();

  const iniciar = async () => {
    const valor = await isLogged();

    if (getJwt()) {
      const data = jwtDecode(getJwt());

      setUser(
        {
          username: data.username,
          role: data.role
        }
      );
    }

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

      <Route path="/themoviedb" element={
        <ProtectedRoute logged={logged}>
          <MoviesTMDB />
        </ProtectedRoute>
      } />

      <Route path="/mispeliculas" element={
        <ProtectedRoute logged={logged}>
          <MisPeliculas />
        </ProtectedRoute>
      } />

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router