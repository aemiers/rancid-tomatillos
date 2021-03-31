import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import logo from '../assets/logo.svg';
import '../Sass/Header.scss';


const Header = ({ click, filterSearch }) => {
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

Header.propTypes = {
  click: PropTypes.func
};
