import React from 'react'
import { Route, Routes } from 'react-router'
import Catalogo from '../pages/Catalogo'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Catalogo/>} />
    </Routes>
  )
}

export default Router