import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import logo from '../assets/logo.svg';
import '../Sass/Header.scss'
import { Link } from 'react-router-dom';

const Header = ({ movies, stateChange }) => {
  return (
    <>
      <header>
        <section className='header-container'>
          <Link to={'/'} className='logo-container'>
            <img className='logo' src={logo} alt="rancid tomatillos logo" />
          </Link>
          <div className='form-container'>
            <Form
              stateChange={stateChange}
              movies={movies}
            />
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
