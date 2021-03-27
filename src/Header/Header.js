import React from 'react';
import Form from '../Form/Form';

import './Header.scss'

const Header = () => {
  return (
    <>
      <header>
        <section className='header-container'>
          <div className='logo-container'>
            <img alt="rancid tomatillos logo" src="./assets/logo.svg" class="logo" />
          </div>
          <div className='form-container'>
            <Form />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;