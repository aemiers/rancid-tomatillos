import React from 'react';
import Form from '../Form/Form';
import logo from '../assets/logo.svg';

import './Header.scss'

const Header = ({ click }) => {
  return (
    <>
      <header>
        <section className='header-container'>
          <div onClick={event => click(0)} className='logo-container'>
            <img src={logo} alt="rancid tomatillos logo" />
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
