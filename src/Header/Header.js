import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <>
      <header>
        <div className='logo-container'>
          <img alt="rancid tomatillos logo" src="./assets/logo.svg" class="logo" />
        </div>
        {/* <div className='form-container'>
          <Form />
        </div> */}
      </header>
    </>
  )
}

export default Header;