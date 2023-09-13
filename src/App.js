import { useEffect, useState } from "react";
import { isLogged } from "./utils/apiFunctions";
import { BrowserRouter, Router } from "react-router-dom";
import Login from "./pages/Login";


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
  )

  return (
    <>
    {
      logged ? (
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      ):(
        <Login/>
      )
    }
    </>
  );
}

export default App;
