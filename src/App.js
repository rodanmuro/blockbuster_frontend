import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Alert from "./components/alert/Alert";
import Navbar from "./components/navbar/Navbar";

export const loggedContext = React.createContext();
export const userContext = React.createContext();
export const alertContext = React.createContext();
export const moviesTMDBcontext = React.createContext();

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({
    username: '',
    role: ''
  });
  const [swalProps, setSwalProps] = useState({});
  const [moviesTMDB, setMoviesTMDB] = useState([]);

  return (
    <>
      <moviesTMDBcontext.Provider value={{moviesTMDB, setMoviesTMDB}}>
        <alertContext.Provider value={{ swalProps, setSwalProps }}>
          <userContext.Provider value={{ user, setUser }}>
            <loggedContext.Provider value={{ logged, setLogged }}>
              <BrowserRouter>
                <Navbar />
                <Router />
              </BrowserRouter>
              <Alert />
            </loggedContext.Provider>
          </userContext.Provider>
        </alertContext.Provider>
      </moviesTMDBcontext.Provider>
    </>
  );
}

export default App;
