import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { userContext } from '../../App'

const Navbar = () => {

    const {user, setUser} = useContext(userContext);

    return (
        <div>

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >

                <div className='container'>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse'
                        id="navbarSupportedContent"
                    >
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item active'>
                                <Link to="/" className='nav-link'>
                                    Catálogo
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to={user.role==='ADMIN'?'/themoviedb':'/mispeliculas'} className='nav-link' ></Link>
                            </li>

                        </ul>


                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar