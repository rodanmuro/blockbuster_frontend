import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

export const loggedContext = React.createContext();

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <>
      <loggedContext.Provider value={{logged, setLogged}}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </loggedContext.Provider>
    </>
  );
}

export default App;
