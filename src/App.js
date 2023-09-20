import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

export const loggedContext = React.createContext();
export const userContext = React.createContext();

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({
    username: '',
    role: ''
  })

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <loggedContext.Provider value={{ logged, setLogged }}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </loggedContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
