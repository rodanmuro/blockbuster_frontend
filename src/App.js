
import { useEffect, useState } from 'react';
import './App.css';
import { isLogged } from './utils/apiFunctions';
import { Router } from 'express';
import Login from './pages/Login';

function App() {
  const[logged, setLogged] = useState(false);
const iniciar = async ()=>{
  const valor = await isLogged();
  setLogged(valor);
}

useEffect(
  ()=>{
    iniciar();
  },
  []
);

  return (
    <>
    {
      logged?(
        <BrowserRouter></BrowserRouter>
      ):(
        <Login/>
      )
    }
    </>
    
  );
}

export default App;
