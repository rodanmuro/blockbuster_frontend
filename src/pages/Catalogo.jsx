import React, { useContext } from 'react'

import { userContext } from '../App'

const Catalogo = () => {

  const {user}=useContext(userContext);

  return (
    <div>Catalogo Hola {user.username} role {user.role} </div>
  )
}

export default Catalogo 