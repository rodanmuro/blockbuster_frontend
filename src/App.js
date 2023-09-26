import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Alert from "./components/alert/Alert";

export const loggedContext = React.createContext();
export const userContext = React.createContext();
export const alertContext = React.createContext();

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({
    username: '',
    role: ''
  });

  const [swalProps, setSwalProps] = useState({});

  return (
    <>
      <alertContext.Provider value={{swalProps, setSwalProps}}>
        <userContext.Provider value={{ user, setUser }}>
          <loggedContext.Provider value={{ logged, setLogged }}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <Alert/>
          </loggedContext.Provider>
        </userContext.Provider>
      </alertContext.Provider>
    </>
  );
}

export default App;
