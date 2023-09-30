import React from 'react'

const UserLogout = () => {
  return (
    <div className='dropdown dropbottom userIcon'>

        <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id="dropDownMenuButton1"
        data-bs-toggle="dropdown"
        >
            <svg 
            xmlns='http://www.w3.org/2000/svg'
            widht="30"
            height="30"
            fill="white"
            className='bi bi-person-fill'
            viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
            

        </button>

    </div>
  )
}

export default UserLogout