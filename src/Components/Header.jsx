import React from 'react'
import logo from './logo.png'
import { useState } from 'react'
import Time from './time/time'

const Header = () => {
  const [show, setShow]=useState(true)
  return (
    <div>
        <div className='header-container' onClick={()=> setShow(!show) }>
            <div className='header-logo'>
                <img src={logo} alt='logo'/>

            </div>

            {show && <div className='info'>
                <Time />
              </div>}

            <div className='title'>
                <h1>Maankuli Center</h1>
            </div>
        </div>

    </div>
  )
}

export default Header