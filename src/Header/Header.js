import React from 'react';
import Form from '../Form/Form';
import logo from '../assets/logo.svg';


import './Header.scss'

const Header = ({ click }) => {
  return (
    <>
      <header>
        <section className='header-container'>
          <button onClick={event => click(0)} className='logo-container'>
            <img className='logo' src={logo} alt="rancid tomatillos logo" />
          </button>
          <div className='form-container'>
            <Form />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;
